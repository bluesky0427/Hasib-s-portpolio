# Troubleshooting Guide

## Connection Timeout Error

If you see this error when running `npm run dev`:

```
TypeError: fetch failed
ConnectTimeoutError: Connect Timeout Error
```

### What It Means

This error occurs when Next.js tries to check for version updates during development. It's **not a critical error** - your development server will still work normally despite this message.

### Solutions

#### Option 1: Ignore the Error (Recommended)
The error is safe to ignore. Your dev server will start and function normally. Just wait a few seconds after the error appears, and you should see:

```
✓ Ready in X.Xs
○ Local: http://localhost:3000
```

#### Option 2: Disable Telemetry
Create a `.env.local` file in the root directory with:

```
NEXT_TELEMETRY_DISABLED=1
```

Then restart your dev server.

#### Option 3: Work Offline
If you're working offline, Next.js will automatically skip version checks after the first attempt fails. Subsequent starts should be faster.

### Why This Happens

Next.js attempts to:
- Check for framework updates
- Send anonymous telemetry (if enabled)
- Verify connectivity to npm registry

If your network is slow, behind a firewall, or you're offline, these requests will timeout.

### Verification

After the error, check if your dev server is running:
1. Look for the "Ready" message in the terminal
2. Open http://localhost:3000 in your browser
3. If the site loads, everything is working correctly

### Still Having Issues?

If your dev server doesn't start at all:
1. Check your Node.js version: `node --version` (should be 18.x or higher)
2. Clear Next.js cache: Delete `.next` folder and try again
3. Reinstall dependencies: `rm -rf node_modules && npm install`


