// Generated ESM version of ua-parser-js/enums
// DO NOT EDIT THIS FILE!
// Source: /src/enums/ua-parser-enums.js

///////////////////////////////////////////////
/*  Enums for UAParser.js v2.0.0-beta.1
    https://github.com/faisalman/ua-parser-js
    Author: Faisal Salman <f@faisalman.com>
    UAParser.js PRO Personal License */
//////////////////////////////////////////////

/*jshint esversion: 6 */ 

const Browser = Object.freeze({
    ANDROID: 'Android Browser',
    BRAVE: 'Brave',
    CHROME: 'Chrome',
    CHROMIUM: 'Chromium',
    DOLPHIN: 'Dolphin',
    DUCKDUCKGO: 'DuckDuckGo',
    EDGE: 'Edge',
    FIREFOX: 'Firefox',
    FOCUS: 'Focus',
    IE: 'IE',
    KONQUEROR: 'Konqueror',
    MOBILE_CHROME: 'Mobile Chrome',
    MOBILE_FIREFOX: 'Mobile Firefox',
    MOBILE_SAFARI: 'Mobile Safari',
    OPERA: 'Opera',
    PALEMOON: 'PaleMoon',
    PUFFIN: 'Puffin',
    QQ: 'QQ Browser',
    SAFARI: 'Safari',
    SAMSUNG: 'Samsung Internet',
    UC: 'UC Browser',
    VIVALDI: 'Vivaldi',
    YANDEX: 'Yandex'

    // TODO : test!
});

const CPU = Object.freeze({
    ARM : 'arm',
    ARM64: 'arm64',
    ARMHF: 'armhf',
    AVR: 'avr',
    IA64: 'ia64',
    IRIX: 'irix',
    IRIX64: 'irix64',
    MIPS: 'mips',
    MIPS64: 'mips64',
    MOTO_68K: '68k',
    PPC: 'ppc',
    SPARC: 'sparc',
    SPARC64: 'sparc64',
    X86: 'ia32',
    X86_64: 'amd64'
});

const Device = Object.freeze({
    CONSOLE: 'console',
    DEKSTOP: 'desktop',
    EMBEDDED: 'embedded',
    MOBILE: 'mobile',
    SMARTTV: 'smarttv',
    TABLET: 'tablet',
    WEARABLE: 'wearable'
});

const Vendor = Object.freeze({
    ACER: 'Acer',
    ALCATEL: 'Alcatel',
    APPLE: 'Apple',
    AMAZON: 'Amazon',
    ARCHOS: 'Archos',
    ASUS: 'ASUS',
    ATT: 'AT&T',
    BENQ: 'BenQ',
    BLACKBERRY: 'BlackBerry',
    DELL: 'Dell',
    ESSENTIAL: 'Essential',
    FACEBOOK: 'Facebook',
    FAIRPHONE: 'Fairphone',
    GEEKSPHONE: 'GeeksPhone',
    GENERIC: 'Generic',
    GOOGLE: 'Google',
    HP: 'HP',
    HTC: 'HTC',
    HUAWEI: 'Huawei',
    INFINIX: 'Infinix',
    JOLLA: 'Jolla',
    KOBO: 'Kobo',
    LENOVO: 'Lenovo',
    LG: 'LG',
    MEIZU: 'Meizu',
    MICROSOFT: 'Microsoft',
    MOTOROLA: 'Motorola',
    NEXIAN: 'Nexian',
    NINTENDO: 'Nintendo',
    NOKIA: 'Nokia',
    NVIDIA: 'Nvidia',
    ONEPLUS: 'OnePlus',
    OPPO: 'OPPO',
    OUYA: 'Ouya',
    PALM: 'Palm',
    PANASONIC: 'Panasonic',
    PEBBLE: 'Pebble',
    POLYTRON: 'Polytron',
    REALME: 'Realme',
    RIM: 'RIM',
    ROKU: 'Roku',
    SAMSUNG: 'Samsung',
    SHARP: 'Sharp',
    SIEMENS: 'Siemens',
    SONY: 'Sony',
    SPRINT: 'Sprint',
    TECNO: 'Tecno',
    TESLA: 'Tesla',
    ULEFONE: 'Ulefone',
    VIVO: 'Vivo',
    VODAFONE: 'Vodafone',
    XBOX: 'Xbox',
    XIAOMI: 'Xiaomi',
    ZEBRA: 'Zebra',
    ZTE: 'ZTE',

    // TODO : test!
});

const Engine = Object.freeze({
    AMAYA: 'Amaya',
    BLINK: 'Blink',
    EDGEHTML: 'EdgeHTML',
    FLOW: 'Flow',
    GECKO: 'Gecko',
    GOANNA: 'Goanna',
    ICAB: 'iCab',
    KHTML: 'KHTML',
    LIBWEB: 'LibWeb',
    LINKS: 'Links',
    LYNX: 'Lynx',
    NETFRONT: 'NetFront',
    NETSURF: 'NetSurf',
    PRESTO: 'Presto',
    TASMAN: 'Tasman',
    TRIDENT: 'Trident',
    W3M: 'w3m',
    WEBKIT: 'WebKit'
});

const OS = Object.freeze({
    AIX: 'AIX',
    AMIGA_OS: 'Amiga OS',
    ANDROID: 'Android',
    ANDROID_X86: 'Android-x86',
    ARCH: 'Arch',
    BADA: 'Bada',
    BEOS: 'BeOS',
    BLACKBERRY: 'BlackBerry',
    CENTOS: 'CentOS',
    CHROME_OS: 'Chrome OS',
    CONTIKI: 'Contiki',
    FEDORA: 'Fedora',
    FIREFOX_OS: 'Firefox OS',
    FREEBSD: 'FreeBSD',
    DEBIAN: 'Debian',
    DEEPIN: 'Deepin',
    DRAGONFLY: 'DragonFly',
    ELEMENTARY_OS: 'elementary OS',
    FUCHSIA: 'Fuchsia',
    GENTOO: 'Gentoo',
    GHOSTBSD: 'GhostBSD',
    GNU: 'GNU',
    HAIKU: 'Haiku',
    HARMONYOS: 'HarmonyOS',
    HP_UX: 'HP-UX',
    HURD: 'Hurd',
    IOS: 'iOS',
    JOLI: 'Joli',
    KAIOS: 'KaiOS',
    LINPUS: 'Linpus',
    LINSPIRE: 'Linspire',
    LINUX: 'Linux',
    MACOS: 'macOS',
    MAEMO: 'Maemo',
    MAGEIA: 'Mageia',
    MANDRIVA: 'Mandriva',
    MANJARO: 'Manjaro',
    MEEGO: 'MeeGo',
    MINIX: 'Minix',
    MINT: 'Mint',
    MORPH_OS: 'Morph OS',
    NETBSD: 'NetBSD',
    NETRANGE: 'NetRange',
    NETTV: 'NetTV',
    NINTENDO: 'Nintendo',
    OPENBSD: 'OpenBSD',
    OPENVMS: 'OpenVMS',
    OS2: 'OS/2',
    PALM: 'Palm',
    PC_BSD: 'PC-BSD',
    PCLINUXOS: 'PCLinuxOS',
    PLAN9: 'Plan9',
    PLAYSTATION: 'PlayStation',
    QNX: 'QNX',
    RASPBIAN: 'Raspbian',
    REDHAT: 'RedHat',
    RIM_TABLET_OS: 'RIM Tablet OS',
    RISC_OS: 'RISC OS',
    SABAYON: 'Sabayon',
    SAILFISH: 'Sailfish',
    SERENITYOS: 'SerenityOS',
    SERIES40: 'Series40',
    SLACKWARE: 'Slackware',
    SOLARIS: 'Solaris',
    SUSE: 'SUSE',
    SYMBIAN: 'Symbian',
    TIZEN: 'Tizen',
    UBUNTU: 'Ubuntu',
    UNIX: 'Unix',
    VECTORLINUX: 'VectorLinux',
    VIERA: 'Viera',
    WATCHOS: 'watchOS',
    WEBOS: 'WebOS',
    WINDOWS: 'Windows',
    WINDOWS_MOBILE: 'Windows Mobile',
    WINDOWS_PHONE: 'Windows Phone',
    ZENWALK: 'Zenwalk'

    // TODO : test!
});

export { 
    Browser, 
    CPU, 
    Device, 
    Vendor,
    Engine,
    OS
};