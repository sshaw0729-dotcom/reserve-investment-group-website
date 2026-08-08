# Setting Up Email Sending — Simple Step-by-Step Guide

This guide walks through everything needed so your website can send the
automatic follow-up emails from **info@reserveinvestmentgroup.com**.
No technical background needed — just follow the steps in order.

**Time needed:** about 20–30 minutes.
**What you need:** to be signed in as an "admin" on your Microsoft 365
account (the account that manages reserveinvestmentgroup.com's email).
If you're not sure whether your login can do this, that's okay — try
Step 1, and Microsoft will tell you if you don't have the right access.

## The big picture, in plain English

Right now, only a real person clicking "send" in Outlook can send email
as your business. We want a robot (the automatic follow-up system) to be
able to send email too — but only a very limited, safe kind of sending.

Think of it like giving a new employee a keycard. We don't want to give
this "robot employee" a master key that opens every door in the
building (every mailbox at your company). We want to give it one key
that opens exactly one door: your own mailbox, so it can send as
`info@reserveinvestmentgroup.com`, which is already an alias (a
nickname) on your existing mailbox.

Every step below is either "give the robot a keycard" or "make sure the
keycard only opens one door."

---

## Part 1 — Create the "robot employee" (5 minutes)

1. Open a web browser and go to **entra.microsoft.com**
2. Sign in with your Microsoft 365 admin account.
3. On the left-hand menu, look for **Identity**, then click it.
4. Under Identity, click **Applications**, then click **App registrations**.
5. Click the button that says **+ New registration** (usually top-left).
6. You'll see a form. Fill it in like this:
   - **Name:** type `Reserve Investment Group Nurture Sender` (this is
     just a label so you recognize it later — it can be anything).
   - **Supported account types:** leave this on the default option
     (it's usually already selected correctly).
   - **Redirect URI:** leave this completely blank / don't touch it.
7. Click the **Register** button.

You'll land on a page with your new "robot employee's" details. **Keep
this browser tab open** — you'll come back to it.

### Write down two things from this page

On this page, find and copy these two values somewhere safe (a Notes
app, a text file — anywhere you won't lose them):

- **Application (client) ID** — looks like a long code with dashes, e.g.
  `12345678-abcd-1234-abcd-1234567890ab`
- **Directory (tenant) ID** — looks similar, also with dashes

Label them clearly, like:
```
Application (client) ID: [paste here]
Directory (tenant) ID: [paste here]
```

---

## Part 2 — Give the robot permission to send email (5 minutes)

Still on that same app's page:

1. On the left-hand menu (inside the app's page), click **API permissions**.
2. Click **+ Add a permission**.
3. Click the big tile that says **Microsoft Graph**.
4. You'll be asked to choose between two types of permission — click
   **Application permissions** (NOT "Delegated permissions" — this
   matters, so double check you clicked the right one).
5. A search box appears. Type `Mail.Send` and press Enter.
6. Check the box next to **Mail.Send** in the list that appears.
7. Click the **Add permissions** button at the bottom.

You'll now see `Mail.Send` in a list, probably with a yellow warning
symbol next to it saying something like "Not granted." That's expected —
one more click fixes it:

8. Click the button near the top that says **✓ Grant admin consent for
   [your organization's name]**.
9. A popup will ask "Do you want to grant consent..." — click **Yes**.

The warning symbol should turn into a green checkmark. If it doesn't, or
if you don't see a "Grant admin consent" button at all, it usually means
your login isn't a full admin — ask whoever manages your Microsoft 365
account (your IT provider, if you have one) to do just this one step for
you (Parts 1–3 total), then hand the three values back to you.

---

## Part 3 — Create the robot's "password" (3 minutes)

1. Still inside the app's page, look at the left-hand menu again and
   click **Certificates & secrets**.
2. Click the tab that says **Client secrets**.
3. Click **+ New client secret**.
4. In the "Description" box, type anything, like `nurture sender secret`.
5. Under "Expires," pick the longest option available (often "24
   months"). Click **Add**.
6. A new row appears with a **Value** column. This is very important:

   **⚠️ Copy the "Value" right now.** It's a long random string. This is
   the ONLY time you will ever be able to see it — if you navigate away
   and come back, it'll be hidden forever and you'd have to make a new
   one. Copy it immediately into that same safe notes file:

```
Client secret VALUE: [paste here]
```

   (There's also a "Secret ID" column nearby — you don't need that one,
   only the "Value" one.)

You now have all three values needed:
- Application (client) ID
- Directory (tenant) ID
- Client secret Value

---

## Part 4 — Make sure the robot can ONLY use your mailbox (10 minutes)

This is the "make sure the keycard only opens one door" part. It's the
most technical step, but it's really just copying and pasting a few
lines of text. This step uses a different tool called PowerShell instead
of clicking around a website — that's normal for this particular task,
Microsoft doesn't offer a button for it.

1. On a Windows computer, click Start and type `PowerShell`, then open
   **Windows PowerShell**. (On a Mac, you can install PowerShell for Mac
   for free from Microsoft, or ask your IT provider to run this part.)
2. If this is your first time, you may need to install a tool first.
   Copy and paste this line, press Enter, and approve any prompt that
   appears:
   ```
   Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser
   ```
   (The `-Scope CurrentUser` part installs it just for your Windows
   login instead of the whole computer, so you don't need to be a
   computer administrator — just your Microsoft 365 admin login,
   which is a different thing. If it asks "Untrusted repository, install
   anyway?", type `Y` and press Enter.)
3. Windows sometimes blocks newly installed tools from running until you
   allow it. Run this line first (safe to run even if you don't need
   it):
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   If it asks to confirm, type `Y` and press Enter. It's normal for this
   command to show nothing at all when it works — if you're not sure,
   run `Get-ExecutionPolicy -Scope CurrentUser` and check that it says
   `RemoteSigned`.
4. Now connect to your email system. Copy, paste, and press Enter:
   ```
   Connect-ExchangeOnline
   ```
   A Microsoft sign-in window will pop up — sign in with your admin
   account, same as Part 1. If you still get an error here mentioning
   "module could not be loaded," run `Import-Module ExchangeOnlineManagement`
   on its own and share the exact message it gives back. After signing
   in, you'll see a wall of text about "V3 EXO PowerShell module" and
   REST APIs — that's just Microsoft's normal welcome banner, not an
   error. You're connected; move on to the next command.
4. Create a small "list" containing just your one mailbox. This has to
   be a specific kind of list called a "mail-enabled security group" —
   the `-Type "Security"` part below matters, don't leave it out, or the
   next step will fail with an error about "not a security principal."
   Copy, paste, and press Enter (this whole thing is one line):
   ```
   New-DistributionGroup -Name "Nurture Sender Allowed Mailbox" -Type "Security" -Members "ron.shaw@reserveinvestmentgroup.com"
   ```
5. Now tell Microsoft: "the robot employee may only ever touch mailboxes
   in that small list." Copy the line below, but **first replace
   `PASTE_CLIENT_ID_HERE`** with the "Application (client) ID" you saved
   in Part 1, then paste and press Enter. If you get an error saying
   "not a security principal," it usually just means Microsoft's systems
   need a few minutes to catch up on the group you just created — wait 5
   minutes and try this exact command again before troubleshooting
   further:
   ```
   New-ApplicationAccessPolicy -AppId "PASTE_CLIENT_ID_HERE" -PolicyScopeGroupId "Nurture Sender Allowed Mailbox" -AccessRight RestrictAccess -Description "Restrict nurture sender to one mailbox"
   ```
6. Optional double-check — copy, paste (replacing the client ID again),
   and press Enter:
   ```
   Test-ApplicationAccessPolicy -AppId "PASTE_CLIENT_ID_HERE" -Identity "ron.shaw@reserveinvestmentgroup.com"
   ```
   It should say `AccessGranted`.

If any line gives an error you don't understand, stop and send me the
exact error message — don't guess or keep trying random things here,
since this step controls what the robot is allowed to touch.

---

## Part 5 — Hand the three values to the website (5 minutes)

Now we tell your website's hosting service (Netlify) the three secret
values, so the website itself can use them (never shared with me, never
put in any file I can see — this keeps them private and secure).

1. Go to **app.netlify.com** and sign in.
2. Open the site for reserveinvestmentgroup.com.
3. Click **Site configuration** (or **Site settings**), then
   **Environment variables**.
4. Click **Add a variable** (do this 5 times, once for each row below).
   For each one, set **Scope** to **Production only** if that option is
   offered — these are sensitive and shouldn't apply to test versions of
   the site.

| Variable name | Value |
|---|---|
| `MS_GRAPH_TENANT_ID` | the Directory (tenant) ID from Part 1 |
| `MS_GRAPH_CLIENT_ID` | the Application (client) ID from Part 1 |
| `MS_GRAPH_CLIENT_SECRET` | the Client secret Value from Part 3 |
| `MS_GRAPH_SEND_AS_MAILBOX` | `ron.shaw@reserveinvestmentgroup.com` |
| `MS_GRAPH_FROM_ALIAS` | `info@reserveinvestmentgroup.com` |

5. One more variable, but this one you make up yourself rather than
   copying from Microsoft — it's a password that only your website and
   your scheduled task will know, protecting the sending function from
   randoms on the internet. Any long random text works. If you're not
   sure what to type, just mash your keyboard for a few seconds, or ask
   me and I'll generate one for you to paste in (I won't store it or see
   what you actually save):
   ```
   Variable name: INTERNAL_SEND_SECRET
   Value: [any long random text, at least 20-30 characters]
   ```

6. Save/deploy so these take effect (Netlify usually asks you to trigger
   a new deploy after adding variables — go ahead and do that, or just
   let the next regular deploy pick them up).

---

## Part 6 — Tell me the "internal" password (1 minute)

The scheduled task that sends the emails also needs to know the value
you picked for `INTERNAL_SEND_SECRET` in Part 5, step 5 — it's the only
one of the six values it needs. Just tell me that one value (not the
other five — those stay in Netlify only) and I'll finish wiring it up on
my end.

---

## Part 7 — Test it

This test doesn't need the website to be finished or deployed — it
checks the Microsoft side directly, in the same PowerShell window.
**Paste your client secret only into this script, never into chat.**

Replace `PASTE_YOUR_NEW_SECRET_HERE` on the third line with your real
client secret value, then paste this whole block into PowerShell and
press Enter:

```powershell
$tenantId = "<your Directory (tenant) ID from Part 1>"
$clientId = "<your Application (client) ID from Part 1>"
$clientSecret = "PASTE_YOUR_NEW_SECRET_HERE"

$tokenBody = @{
    client_id     = $clientId
    client_secret = $clientSecret
    grant_type    = "client_credentials"
    scope         = "https://graph.microsoft.com/.default"
}
$token = (Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token" -Body $tokenBody).access_token

$mail = @{
    message = @{
        subject      = "Test email - nurture sender setup"
        body         = @{ contentType = "Text"; content = "If you got this, the Microsoft Graph setup is working correctly." }
        toRecipients = @(@{ emailAddress = @{ address = "ron.shaw@reserveinvestmentgroup.com" } })
        from         = @{ emailAddress = @{ address = "info@reserveinvestmentgroup.com" } }
    }
    saveToSentItems = $true
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Method Post -Uri "https://graph.microsoft.com/v1.0/users/ron.shaw@reserveinvestmentgroup.com/sendMail" -Headers @{ Authorization = "Bearer $token" } -Body $mail -ContentType "application/json"
```

If it runs with no red error text, check the `ron.shaw@reserveinvestmentgroup.com`
inbox for a message titled "Test email - nurture sender setup," and
check what its **From** address shows. If it says
`info@reserveinvestmentgroup.com`, the whole mechanism works. This test
only proves the Microsoft side works — the website itself (Netlify) is a
separate step, tracked in `MARKETING-ECOSYSTEM-BRIEF.md`, and is gated
on a compliance review before it goes live for real.

---

## Quick recap — what you're doing at each Microsoft website

- **entra.microsoft.com** → create the "robot employee" and give it
  permission to send mail (Parts 1–3)
- **PowerShell** → make sure the robot can only touch one mailbox
  (Part 4)
- **app.netlify.com** → give the website the robot's ID card and
  password, privately (Part 5)
- **Back here in chat** → give me just the one password from Part 5,
  step 5 (Part 6)

If you get stuck anywhere, tell me exactly which numbered step and what
you're seeing on screen, and I'll help from there.
