# Android 截图的 Node http 服务

## 依赖

1. Node 及 npm

    可以通过以下命令检查是否已安装

    ```shell
    node --version
    ```

    ```shell
    npm --version
    ```

    正常情况下会输出以下类似结果

    ```shell
    ➜ node --version
    v22.11.0
    ```

    ```shell
    ➜ npm --version
    10.9.0
    ```

2. Android 调试桥 (adb)

    可以通过以下命令检查是否已安装

    ```shell
    adb --version
    ```

    正常情况下会输出以下类似结果

    ```shell
    ➜ adb --version
    Android Debug Bridge version 1.0.41
    Version 35.0.2-12147458
    Installed as C:\path\to\adb.exe
    Running on Windows 10.0.22631
    ```

## 运行

1. 安装依赖

    ```shell
    npm install
    ```

2. 启动服务

    ```shell
    node .\main.js
    ```

3. 使用 adb 连接设备

    ```shell
    adb connect $deviceIp:$devicePort
    ```

    或者你可以通过有线的方式进行连接，具体请参考 adb 的官方文档

    连接成功后可以通过以下命令验证

    ```shell
    adb devices
    ```

    正常情况下会输出以下类似结果

    ```shell
    ➜ adb devices
    List of devices attached
    $deviceIp:$devicePort      device
    ```

4. 测试

    现在可以通过 `http://127.0.0.1:5051` 验证截图服务是否正常

5. 使用 Snapshop

    现在你可以将上述链接填入 Snapshop 接口输入框，即可在 Snapshop 获取截图了
