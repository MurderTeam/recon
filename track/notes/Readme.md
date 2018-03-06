# notes

| Library         | UA | OS |
|---              |-- -|--- |
|XSLET/platform | :skull:| :skull:|



#### (clientJs)[https://github.com/jackspirou/clientjs]
-2 years old, so thats gonna be a shame
-Seems like they do some fairly sophisitcated fingerprinting though, could be useful to check methodoly.



#### (XSLET/platorm)[https://github.com/xslet/platform]

*Initial Impression*
-Heavy on tooling
-Seems to have a fairly decent amount of device detection, will need to see in field
-Can definitely be shrunken down and has potential for integration as component  
-Works as advertised, seems like a lot of the analysis it does cold be done after the relevant info was collected.


Sligjhtly trimmed output
```
console.log(xslet.platform)
{ua: {…}, os: {…}}os: ANDROID: (false)
IOS: (false)
IPAD: (false)
IPHONE: (false)
IPOD: (false)
LINUX: (false)
MACOS: true
UNKNOWN: (false)
WINNT: (false)

FIREFOX: (false)
MSIE: (false)
OPERA: (false)
PHANTOMJS: (false)
SAFARI: (false)
UNKNOWN: (false)
VIVALDI: (false)

```
