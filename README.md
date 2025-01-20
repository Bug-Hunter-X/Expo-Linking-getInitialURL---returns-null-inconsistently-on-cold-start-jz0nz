# Expo Linking.getInitialURL() Inconsistent null return on cold start

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API.  Under certain conditions, particularly on a cold start initiated by a deep link, the function may return `null` even when a URL is clearly provided through the intent. This is an intermittent issue that is difficult to reproduce reliably.

## Steps to Reproduce

While a consistent reproduction method is elusive, users have reported this occurring when the app is completely closed and then launched from a deep link.

## Bug Behavior

The `Linking.getInitialURL()` method is expected to return the initial URL if the app was launched from a deep link.  However, it inconsistently returns `null`, causing features dependent on deep link handling to fail silently.

## Solution

The provided solution attempts to handle the intermittent `null` return by utilizing `Linking.addEventListener` to listen for URL changes and providing a fallback mechanism.