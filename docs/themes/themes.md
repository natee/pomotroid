# 番茄计时器主题

🍅番茄计时器提供了许多官方主题，你也可以添加自己的主题。

- [番茄计时器主题](#番茄计时器主题)
  - [可选主题](#可选主题)
  - [创建自定义主题](#创建自定义主题)

## 可选主题

默认提供了下面这些主题

| 主题               | App 颜色                        | 计时器颜色                                     |
| ------------------- | ----------------------------- | --------------------------------- |
| Andromeda           | ![Andromeda theme preview](images/andromeda_01.png)                     | ![Andromeda theme preview](images/andromeda_02.png)                     |
| Ayu Mirage          | ![Ayu Mirage theme preview](images/ayu_01.png)                          | ![Ayu Mirage theme preview](images/ayu_02.png)                          |
| City Lights         | ![City Lights theme preview](images/city-lights_01.png)                 | ![City Lights theme preview](images/city-lights_02.png)                 |
| Dracula             | ![Dracula theme preview](images/dracula_01.png)                         | ![Dracula theme preview](images/dracula_02.png)                         |
| D.Va                | ![D.Va theme preview](images/dva_01.png)                                | ![D.Va theme preview](images/dva_02.png)                                |
| GitHub              | ![GitHub theme preview](images/github_01.png)                           | ![GitHub theme preview](images/github_02.png)                           |
| Graphite            | ![Graphite theme preview](images/graphite_01.png)                       | ![Graphite theme preview](images/graphite_02.png)                       |
| Gruvbox             | ![Gruvbox theme preview](images/gruvbox_01.png)                         | ![Gruvbox theme preview](images/gruvbox_02.png)                         |
| Monokai             | ![Monokai theme preview](images/monokai_01.png)                         | ![Monokai theme preview](images/monokai_02.png)                         |
| Nord                | ![Nord theme preview](images/nord_01.png)                               | ![Nord theme preview](images/nord_02.png)                               |
| One Dark Pro        | ![One Dark Pro theme preview](images/one-dark-pro_01.png)               | ![One Dark Pro theme preview](images/one-dark-pro_02.png)               |
| Pomotroid (default) | ![Pomotroid theme preview](images/pomotroid_01.png)                     | ![Pomotroid theme preview](images/pomotroid_02.png)                     |
| Popping and Locking | ![Popping and Locking theme preview](images/popping-and-locking_01.png) | ![Popping and Locking theme preview](images/popping-and-locking_02.png) |
| Solarized Light     | ![Solarized Light theme preview](images/solarized-light_01.png)         | ![Solarized Light theme preview](images/solarized-light_02.png)         |
| Spandex             | ![Spandex theme preview](images/spandex_01.png)                         | ![Spandex theme preview](images/spandex_02.png)                         |
| Sythwave            | ![Sythwave theme preview](images/synthwave_01.png)                      | ![Sythwave theme preview](images/synthwave_02.png)                      |
| Tokyo Night Storm   | ![Tokyo Night Storm theme preview](images/tokyo-night-storm_01.png)     | ![Tokyo Night Storm theme preview](images/tokyo-night-storm_02.png)     |

## 创建自定义主题

创建自定义主题非常简单，你可以创建一个 `json` 文件，提供一个 `name` 属性作为主题名称，然后提供一个 `color` 属性，里面列出 app 中使用到的颜色。如下：

```json
// theme-template.json
{
  "name": "Theme Name",
  "colors": {
    "--color-long-round": "",
    "--color-short-round": "",
    "--color-focus-round": "",
    "--color-background": "",
    "--color-background-light": "",
    "--color-background-lightest": "",
    "--color-foreground": "",
    "--color-foreground-darker": "",
    "--color-foreground-darkest": "",
    "--color-accent": ""
  }
}
```

主题文件写好后，把文件移至 `appData/themes` 目录下，具体的 `appData` 的位置取决于操作系统的类型。

- `%APPDATA%` on **Windows**
- `$XDG_CONFIG_HOME` or `~/.config` on **Linux**
- `~/Library/Application Support` on **macOS**

例如，Windows 电脑把主题文件放至 `C:\Users\{User}\AppData\Roaming\pomotroid\themes` 下。

重启应用程序即可看见新添加的主题出现在可选列表中了。
