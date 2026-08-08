# Two Things To Fix — Easy Guide

There are two small jobs left that only you can do. Nobody else, not even
me, can do these for you. Take your time. There is no rush and you cannot
break anything by going slow.

---

## Job 1: Get a "key" from folk and send it to me

Think of this like a house key. Your folk CRM (the address book of all
your leads and clients) has a special key that lets your website talk to
it. Right now that key doesn't exist yet, so we need to make one.

**Step 1.** Open your web browser (Chrome, Safari, whichever you use).

**Step 2.** Type this into the address bar and press Enter:
`app.folk.app`

**Step 3.** Log in if it asks you to (same way you always log into folk).

**Step 4.** Once you're in, go to this exact address instead (copy and
paste it into the address bar):
`https://app.folk.app/apps/contacts/network/settings/api-keys`

**Step 5.** Look on the left side of the screen for a word that says
**"API Keys."** Click it.

**Step 6.** Look for a button that says something like **"Create API
Key"** or **"New API Key."** Click it.

**Step 7.** It will ask you to name the key. Type: `Website`
(This is just a label so you remember what it's for later.)

**Step 8.** A long string of letters and numbers will appear. This is
the key. **Copy it** (highlight it, right-click, "Copy" — or press
Ctrl+C / Cmd+C).

**Step 9.** Come back to this chat and paste it to me, like this:

> Here's the folk key: [paste it here]

**Step 10.** That's it! Once you send it, I'll put it into place for you.
You don't need to do anything else with it.

⚠️ One heads-up: this key gives full access to your folk CRM, so don't
paste it anywhere except here to me. If you ever want to shut it off
later, you can go back to that same page and delete it, then make a new
one.

---

## Job 2: Replace the Microsoft "password" that got shown by accident

A little while back, a very sensitive password (called a "client secret")
for your Microsoft account got typed into this chat by accident. That's
not a big deal as long as we replace it with a brand new one — like
changing a lock after a spare key got left somewhere it shouldn't have.

**Important: for this one, do NOT send me the new password. You'll put
it in place yourself, in one more click after you make it. This keeps it
extra safe.**

**Step 1.** Open your web browser and go to:
`entra.microsoft.com`

**Step 2.** Log in with your admin account (the same one you used for
the PowerShell steps before).

**Step 3.** On the left side, look for **"Identity"**, then under it
**"Applications"**, then click **"App registrations."**
(If you don't see "Identity" right away, look for a search bar at the
top of the page and type `App registrations` into it instead — that
works too.)

**Step 4.** Click on the app we made before. It should be named
something like the app you registered for sending email (if you're not
sure which one, look for one with today's-ish date or the name you gave
it during setup).

**Step 5.** On the left side of that app's page, click **"Certificates &
secrets."**

**Step 6.** You'll see the old secret listed. Click the button that says
**"New client secret."**

**Step 7.** It will ask for a description — type: `Rotated 2026`
For "expires," leave whatever is already selected (the default is fine).

**Step 8.** Click **"Add."**

**Step 9.** A brand new value will appear in a table. **Copy it right
now** — it only shows this value one time, and if you leave the page
you'll have to start over. (Right-click it, "Copy," or Ctrl+C / Cmd+C.)

**Step 10.** Keep that copied value for one more minute — don't paste it
anywhere yet. Open a **new browser tab** and go to:
`https://app.netlify.com/projects/businessaudittest/configuration/env`

**Step 11.** Log into Netlify if it asks.

**Step 12.** Find the row named **`MS_GRAPH_CLIENT_SECRET`**. Click on
it, then look for an "Edit" or pencil icon.

**Step 13.** Delete whatever is in the value box, and paste your new
secret in instead (the one you copied in Step 9).

**Step 14.** Click **"Save."**

**Step 15.** Go back to the first browser tab (Entra ID). Find the
**old** secret in the list (the one from before, not the new one you
just made). Click the trash can / delete icon next to it, and confirm
you want to delete it.

**Step 16.** Come back here and just tell me: **"Done with Job 2."**
You don't need to tell me the new password — I never need to see it.

---

## When you're finished

Just tell me which jobs are done (one or both). I'll take it from there.
