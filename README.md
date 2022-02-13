[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Somewhat maintained fork of https://github.com/mfrachet/rn-native-portals

This library makes possible the _teleportation_ ( or _reparenting_ like in https://github.com/Paol-imi/react-reparenting ) of components without losing their internal state. Common use case - seamlessly extracting a custom video player nested deeply in components tree to the top to display it in fullscreen.

---

# Content

- <a href="#usage">How to use it ?</a>
- [Understanding the concept](./docs/CONCEPT.md)

<h1 name="#usage">Usage</h1>

### Installation

```
$ yarn add lightrow/rn-native-portals
```
or
```
$ npm install lightrow/rn-native-portals
```
This will install this library directly from GitHub

### In your code

Somewhere high in your component tree, add a `PortalDestination` (a portal destination):

```javascript
import {  PortalDestination } from "rn-native-portals";

export default function App() {
	return (
		<View>
			<StatusBar style="dark" />
			<AppNavigator />
			<PortalDestination name="fullscreenVideo" />
		</View>
    	);
}
```

Somewhere else in the tree, add a `PortalOrigin` (a portal origin):

```javascript
import { PortalOrigin } from 'rn-native-portals';

export default function VideoPlayerSizeHandler() {
	const [isPortalOpen, openPortal] = useState(false);
	...
	return (
		<View style={[...]}>
			<StatusBar hidden={isPortalOpen} />
			<PortalOrigin destination={isPortalOpen ? 'fullscreenVideo' : null}>
				<Animated.View style={[...]}>{children}</Animated.View>
			</PortalOrigin>
		</View>
    	);
}
```
When the `isPortalOpen` state will change to something truthy, the Animated.View will be moved inside the `PortalDestination` component set
previously.

If the value of the `destination` prop is set to `null`, the Animated.View will return back to original place.

---
