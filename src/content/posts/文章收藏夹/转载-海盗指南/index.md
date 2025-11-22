---
title: 转载-海盗指南
published: 2025-10-23
pinned: false
updated: 2025-10-23
description: 教你成为一名优秀的互联网海盗
image: ""
tags:
  - 教程
  - 网络
  - 转载
encrypted: true
password: cxzsjtu
category: 资源
licenseName: MIT
sourceLink: ""
draft: false
---



> 声明：**本文为转载，原文链接: [海盗指南——如何优雅地获取和使用盗版资源](https://shuiyuan.sjtu.edu.cn/t/topic/285527)**




## 前言

楼主自认为还在探索如何作为[海盗](https://en.wikipedia.org/wiki/Online_piracy)远洋盗版之海的过程中，但发现不管是现实生活中还是水源上，许多同学仍被付费内容的门槛所困扰。楼主自认为在此方面还有一些个人的小经验，希望分享给大家，以此减少大家在寻找盗版过程中花费的时间精力和金钱成本。本贴也将设为Wiki帖，希望有经验的源友与大家分享你的海盗经验。

本帖已设置有目录，在PC端的页面右侧和手机端底部的三个小横条按钮可查看目录。每个子类别下网站的排序代表楼主对这些网站的偏好排序。

### 免责声明

在本帖最后更新时，帖子中提到的所有网站均经过个人验证不包含病毒等恶意内容。

本帖并非鼓励盗版行为。希望大家在有经济实力，且创作者值得鼓励的情况下，支持正版内容。

## 准备工作

若你有一些海盗经验，且自认为对互联网上的内容有一定的辨别能力，可以跳过本部分。若你**缺乏经验或刚刚接触盗版**，建议先**仔细阅读本部分**。

本帖提到的大部分网站需要科学上网才能访问。建议你在航海时使用PC，使用移动设备麻烦且耗时。

### 种子/磁力下载

在帖子中提到的种子网站，其下载链接会以种子文件或磁力链接的方式提供。前者是以`.torrent`为扩展名的文件，后者是以`magnet:`开头的URL，在种子网站上一般用磁铁图标表示。

建议使用[qBittorrent-Enhanced-Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition)下载种子/磁力链接；也可以使用[qBittorrent的原始版本](https://www.qbittorrent.org/)，但原始版本不会自动屏蔽恶意Peer。*如果你不知道这是什么意思，请使用前者即可。*

**强烈不建议使用迅雷**！迅雷不仅因为被各大客户端屏蔽而速度受限，还会吸其他客户端的血，破坏种子/磁力下载社区的环境。

#### 关于反吸血

可以使用[qBittorrent-ClientBlocker](https://github.com/Simple-Tracker/qBittorrent-ClientBlocker)阻止恶意Peer占用你的上传带宽。该程序基于行为检测，仅支持qBittorrent。此外，实测[qBittorrent-Enhanced-Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition)的[v4.6.5.10](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases/tag/release-4.6.5.10)版本加入Shadowban功能后，已可以自动阻止大部分恶意Peer。

关于反吸血的更多信息和其他阻止恶意Peer的方法，可参见[此帖子](https://linux.do/t/topic/50994)和[此文档](https://docs.qq.com/doc/DQnJBTGJjSFZBR2JW)。感谢 @many_references

### 直链下载

浏览器自带的下载功能或许够用，但相比专门的多线程下载器，速度可能偏慢。对于采用直接下载的网站，建议你使用**IDM**等第三方工具下载（IDM的盗版在许多地方都能找到，比如将要提到的[Rutracker](https://rutracker.org/forum/tracker.php?nm=internet%20download%20manager)）。

### 网页浏览

使用Edge、Chrome、Firefox等主流浏览器均可。

**强烈**建议安装[uBlock Origin](https://github.com/gorhill/uBlock)插件，该插件可以屏蔽上网冲浪时遇到的99.99%广告，更重要的是，还能有效拦截各大文件托管站烦人的页面跳转。


> 2024年10月更新：上线[Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=zh-cn)后，Chrome浏览器现已不支持uBlock Origin插件。为了解决该问题，你可以：
>
> 1. 换用Firefox或者Edge浏览器（Firefox已明确表示将继续支持Manifest V2，因此**uBlock Origin此后将一直支持Firefox**；Edge曾表示将跟进谷歌推行Manifest V3，但目前还未明确日期，存在未来无法使用的可能性）。
> 2. 若你希望继续使用Chrome浏览器，请换用 [AdGuard](https://adguard.com/zh_cn/adguard-browser-extension/chrome/overview.html)（推荐）或 [uBlock Origin Lite](https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh)


### 防范病毒和恶意软件

虽然帖子中提到的所有网站均不包含病毒等恶意内容，但免不了你想找的资源并不存在于这些网站中，但又急着用。这些情况下，若你找到了某看起来还算正经的网站提供该资源，请先使用谷歌搜索`site:reddit.com [网站名]`了解网站的声誉，并使用[VirusTotal](https://www.virustotal.com/)上传你下载到的文件以保证其内容无病毒。

若你下载的内容确实被杀毒软件拦截，90%的情况是文件确实有毒，而非误报（若杀毒软件显示的报毒名称包含`Crack`、`Keygen`、`KMS`等字眼，则误报的可能性较高）。在没有十足把握的情况下请不要运行此类文件。

对于已知的恶意网站/上传者，请参阅[这个列表](https://www.reddit.com/r/Piracy/wiki/megathread/unsafe-sites/)。

### 请勿…

1. 通过在搜索引擎搜索`[软件名] 破解`、`[软件名] crack`等关键词的方式寻找盗版资源。这些网站提供的文件很大概率会包含**病毒或广告软件**（关于防病毒，请回看**防范病毒和恶意软件**）。

2. 在**欧美国家**直接下载盗版资源。请务必使用VPN下载，因为大部分运营商对盗版资源有很强的限制，轻则律师函警告，重则被运营商拉黑或处以罚款。关于位于欧美国家时的VPN选择， [Mullvad](https://mullvad.net/)和[ProtonVPN](https://protonvpn.com/)在欧美海盗中声誉较好。（国内用户请勿使用这些VPN）

3. 在种子/磁力下载完成后立即停止任务。由于P2P下载的原理，你所获得的下载速度均是由和你一样的用户提供的，反之亦然，他人所获得的下载速度是由你的上传速度提供的。希望你在索取的同时，也回报给P2P下载社区，在种子的分享率达到一定水平后再停止任务。从分享率=1开始努力吧！

## 资源分类

### 影视

#### [TorrentGalaxy](https://tgx.rs/) - 种子

**最全的欧美影视资源**种子站，且更新很快，以碟片资源为主，但也会发布枪版。你可以在这里找到未经压缩的、大至数百GB的蓝光原盘，也可以找到便于快速下载观看的1080P资源。请注意列表右侧`S/L`一栏，该栏下的数字越大，表明该资源越热门，下载速度越快。存在老资源死种的情况，但不多。




> 从2025年2月开始，TorrentGalaxy处于极不稳定状态，随时可能跑路。若链接无法打开请使用 [1337x](https://1337x.to/) 作为替代。



#### [硬核指南](https://yinghezhinan.com/) - 在线播放

导航站，`影视`栏目下排名靠前的网站质量都不错，通常包含国内外知名的影视资源，加载速度快，并且基本没有“在线发牌”的视频内滚动和插入广告。由于楼主习惯下种子，故使用经验较少，只能给大家一个导航站。

#### [EZTV](https://eztvx.to/home) - 种子

比较全的**欧美影视资源**种子站，更新较慢，资源质量差于TorrentGalaxy，主要体现在高分辨率（蓝光碟等）资源缺失。如果觉得1080P足矣，那么也是个不错的选择。请注意列表右侧`Seeds`一栏，该栏下的数字越大，表明该资源越热门，下载速度越快。

#### [字幕库](https://srtku.com/) - 直接下载

最全的**汉语字幕**数据库。可配合无字幕的原版资源使用。

#### 海阔视界 - 源聚合App

需要手动搜索微信公众号“新方圆小棉袄”，在公众号的`版本更新`功能下进入最新文章获取下载链接。

拥有理论上最全的影视资源（关于*源聚合App*的特征，详见**网络小说**下**阅读 - 源聚合App**的介绍），但软件越来越臃肿。个人建议**仅使用该软件的浏览器嗅探功能**，该功能能将在线播放网站上的视频放入支持拖动快进快退、亮度音量调节的播放器中，使你在用手机在线播放视频时不会太痛苦。类似功能也可以在其他浏览器中找到。

### 动画

#### [動漫花園](https://share.dmhy.org/) - 种子

知名的ACG资源种子站，资源丰富且更新很快，以动画为主，也有配乐和漫画等相关资源但较少。请注意列表右侧`种子`和`下载`两栏，该栏下的数字越大，表明该资源越热门，下载速度越快。但近年来随着用户数量下滑，老资源的死种情况增多，建议下老资源不要抱太大希望。

#### [Nyaa](https://nyaa.si/) - 种子

知名的ACG资源种子站。请注意列表右侧`↑`和`↓`两栏，该栏下的数字越大，表明该资源越热门，下载速度越快。感谢 @NOT_AVAILABLE 

#### [樱花动漫](http://yhdmw7.com/) - 在线播放

提供在线播放的动画。感谢 @Narrenschiff 

#### [tsdm](https://www.tsdm39.com/forum.php) / [南+](https://www.south-plus.net/index.php) - 种子/网盘

ACG论坛，其中包含了资源分享区，提供了丰富的各类资源；然而有时分享方式为百度网盘，在没有会员的情况下下载速度可能很慢。感谢 @NOT_AVAILABLE 

### 漫画

#### 异次元 - 源聚合App

需要手动搜索微信公众号“异次元APP软件”，在公众号的`软件下载 - 软件获取`功能下获取下载链接、`图源获取 - 图源获取`功能下获取源。

拥有**理论上最全的漫画资源**，具体使用方法请参考上述公众号中的说明。

### 网络小说

#### [阅读](https://github.com/gedoor/legado) - 源聚合App

拥有**理论上最全的网络小说资源**，第一次使用时有一定难度，但按照App内和官方微信公众号的使用说明，你可以在10分钟之内完成配置并开始阅读。之所以是理论上最全，是因为源聚合App的原理基本上就是按照配置文件帮你搜索了网上所有的笔趣阁等网站，将其内容爬取下来并呈现在阅读器中，并辅助你排除排版混乱、和谐词等因素的阅读干扰。

### 音乐

#### [LX Music](https://lxmusic.toside.cn/) - 源聚合App

拥有**理论上最全的音乐资源**，且支持多平台，可作为日常使用的音乐播放器。建议添加[六音音源](https://www.sixyin.com/8498.html)，如何添加在该网页中有完整的步骤。

#### [lucida](https://lucida.to/) - 直接下载

包含从流媒体平台（如Tidal、Deezer等）上爬取的无损音源，适合对音质有一定需求的用户。使用时需要指定流媒体平台，建议首选Tidal以获得最佳音质。

### 游戏

#### [STEAMRIP](https://steamrip.com/) / [GOG Games](https://gog-games.to/) - 直接下载（文件托管站）

分别提供**Steam商店和GOG商店上未加密的游戏**下载。只要游戏未经加密，99%能在这两个网站上找到，但可能存在游戏版本非最新的情况。请注意，这两个网站提供的下载链接均为文件托管站，这意味着在下载过程中你会遇到烦人的页面跳转和倒计时等待，这是因为文件托管站需要成本支撑下载带宽。最好使用IDM（详见**准备工作**），否则下载速度可能会慢十倍以上。

若需要最新版本的知名大作，或想获得经过各大Scene Groups破解的被加密游戏，请参照下一条。

#### [DODI Repacks](https://dodi-repacks.site/) / [FitGirl Repacks](https://fitgirl-repacks.site/) - 种子

相比上一条提到的两个网站，这两个网站上的游戏并不多（仅为数千个），这是因为这两个网站实质上是提供了重新打包过后的游戏文件，大幅减小文件体积但也会大幅增加安装用时。建议你在追求**最新的游戏版本或被加密的游戏**时在这两个网站上寻找。（*你甚至能在DODI上找到PS5独占的[《漫威蜘蛛侠2》的PC版](https://game-repack.site/2024/07/06/marvels-spider-man-2/)，很神奇吧*）

### 书籍/文献

**请注意**：提供盗版书籍的网站是**钓鱼网站的重灾区**，请小心不要在钓鱼网站上输入账号密码或充值/捐赠。如果你发现下列链接有的已失效，请在Google中输入该网站的名称，找到关于该网站的维基百科，通过维基百科内提供的链接进入。


#### [Anna's Archive](https://annas-archive.org/) - 直接下载

拥有目前**全世界最大的数据库**（包含Z-Lib和部分读秀），但下载速度较差，且使用体验稍逊于Z-Lib。

#### [Library Genesis](https://libgen.rs/) - 直接下载

是 Anna's Archive 的数据来源之一，以外文书籍为主。下载时无需登录，对多线程下载限制较弱，建议使用 IDM 进行下载。

#### [Z-Library](https://z-library.sk/) - 直接下载

在国内知名度最高，且使用体验优于Anna's Archive。数据库比较全面，只要不是太冷门一般都能找到。

受限于本帖的即时性，链接可能随时失效。此时，请前往[Z-Library的维基百科页面](https://en.wikipedia.org/wiki/Z-Library)获取最新链接（位于简介卡片的`URL`一项）。

### PC软件

#### [MASSGRAVE](https://massgrave.dev/)

提供**Windows与Microsoft Office套件**（包括Office 365）的破解。使用过程简单到不可思议：打开PowerShell，输入`irm https://get.activated.win | iex`并回车即可。

作为替代，也可以使用[HEU_KMS_Activator](https://github.com/zbezj/HEU_KMS_Activator)，该程序有直观的GUI且功能更丰富；缺点是会被Windows Defender报告为病毒并删除，需要手动添加排除。

要**获取各种版本的Microsoft Office软件**，可以使用[Office Tool Plus](https://otp.landian.vip/zh-cn/)。该软件可帮助你轻松部署各个版本的Office，并且也内置KMS激活途径。详细使用方法详见该软件的用户指南。

#### [m0nkrus](https://w16.monkrus.ws/) - 种子

专注于分享**Adobe全家桶**和少量一些其他设计软件（如Autodesk AutoCAD）。每篇文章末尾有指向数个种子站的链接，可任选一个进入并下载。请务必保证阅读这些种子站中作者提供的的FAQ。

由于2024版开始，Adobe加大了对盗版的打击，因此使用2024版及更新的Adobe软件更容易被弹窗。除了阅读FAQ内的解决方案外，还可以在防火墙中阻止Adobe软件联网以预防被弹窗。

#### [Rutracker.org](https://rutracker.org/forum/index.php) - 种子

论坛式的俄罗斯资源发布社区，知名度很高，资源很丰富。除了热门软件外，也适合寻找没那么热门的软件。

#### [果核剥壳](https://www.ghxi.com/) / [懒得勤快](https://masuit.org/) - 直接/网盘下载

国内知名度较高的破解软件发布站。资源较少，但都是热门软件，且无需通过种子/磁力下载，**比较适合小白**。

### Mac软件

#### [macked](https://macked.app/)

国内破解平台，部分资源从国外搬运，也包含站长自己破解的资源，更新的频率很高，也完全免费。感谢 @我愿做一只翱翔的鹰

### 安卓软件

#### [ReVanced](https://revanced.app/) - Patcher

提供一些安卓软件的补丁版本，以达到解锁会员或去除广告等效果，以**破解YouTube Premium**（即YouTube的付费功能）而闻名。若你的手机没有ROOT，需要先在[APKMirror](https://www.apkmirror.com/)等网站上下载希望被打补丁软件的原安装包，在ReVanced Manager内选择该安装包并修补后手动安装。

#### [Mobilism](https://forum.mobilism.me/) - 直接下载（文件托管站）

论坛式的安卓破解软件发布社区，内容较为全面。使用方法为在搜索框内搜索你需要的App名称即可。请注意，该网站提供的下载链接均为文件托管站，这意味着在下载过程中你会遇到烦人的页面跳转和倒计时等待，这是因为文件托管站需要成本支撑下载带宽。

#### [xManager](https://www.xmanagerapp.com/) - 直接下载

提供**能使用付费功能的Spotify版本**。

### BT站

**请注意**：本小节提到的种子站内容均为用户上传，因此虽然种子站本身安全，但无法保证你搜索到的每个内容均安全无毒。请参考**前言**下的**防范病毒和恶意软件**部分。

#### [1337x](https://1337x.to/) - 种子

（应该是）目前**全球规模最大的种子站**，受欧美用户欢迎，主打量大管饱，但可能缺少冷门资源。

#### [Rutracker.org](https://rutracker.org/forum/index.php) - 种子

规模较大的种子站，受俄语用户欢迎。在资源质量方面优于1337x，适合查找游戏和软件资源。

### PT站

*PT站在与BT站性质相同，但PT社区用户经过筛选，内容质量更高，几乎不会出现内容带毒的情况；相应地，PT社区对成员也有额外的要求，如上传率等。请你仔细阅读PT站内的公告等内容保证自己遵守社区准则，否则可能被社区封号。*

#### [交大葡萄](https://pt.sjtu.edu.cn/) - 种子（PT）

既然我们已经在交大，便不得不提起交大葡萄。交大葡萄作为国内高校PT社区中较为优质的存在，在资源质量、种子存活等方面比公开的BT站存在优势，更易于筛选作为高校学生所需要的资源。加入社区后请阅读社区规范准则，共建良好的社区环境。感谢 @灰色sky

### 其他

#### [Kemono](https://kemono.su/) - 直接下载

提供用户上传的**Patreon、Pixiv Fanbox、爱发电等付费平台**上需要订阅才可解锁的内容。实测覆盖率较全，但由于资源均为用户上传，根据作者的受欢迎程度，资源可能存在数个月的延迟。

## 拓展内容

若你觉得以上介绍的网站不能满足你的盗版需求，且你希望花些时间自己寻找心仪的盗版资源网站，可关注以下内容，作为本帖的补充。*请注意，下述网站主要关注英语资源。*

- [r/Piracy megathread](https://www.reddit.com/r/Piracy/wiki/megathread/) - 楼主认为目前最全的盗版资源集合。~~（宇宙万法的那个源头）~~
- [Awesome Piracy](https://shakil-shahadat.github.io/awesome-piracy/) - 除盗版资源外，还收集了互联网各个角落的有用资源，如插件、脚本等。
- [FMHY](https://fmhy.net/) - 在媒体资源丰富度方面领先。
- [r/CrackWatch](https://www.reddit.com/r/CrackWatch/) - 如何知道哪些游戏是被加密的呢？[该Sub的置顶帖](https://www.reddit.com/r/CrackWatch/comments/p9ak4n/crack_watch_games/)中列出了所有被Denuvo加密的游戏及其被破解情况。