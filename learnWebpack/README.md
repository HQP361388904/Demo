# webpack学习记录

## 一、搭建环境

1. 安装 ```nvm```

   > [nvm](https://github.com/nvm-sh/nvm)：Node.js多版本管理利器。

2. 安装 ```Node.js``` 和 ```npm```

   ```shell
   nvm install v10.16.2
   ```

3. 检测是否安装成功

   ```shell
   node -v
   npm -v
   ```


## 二、创建项目

1. 创建项目目录

   ```shell
   mkdir learnWebpack
   ```

2. 进入项目

   ```shell
   cd learnWebpack
   ```

3. 初始化项目生成 ```package.json``` 项目配置文件

   ```shell
   npm init -y
   ```

   > ```-y```：初始化为参数默认值。


## 三、安装 ```webpack```

1. 安装 ```webpack``` 和 ```webpack-cli```

   ```shell
   npm install webpack webpack-cli --save-dev
   ```

   > ```--save-dev```：保存依赖到 ```package.json``` 文件中的 ```devDependencies``` 字段。

2. 检测是否安装成功

   ```shell
   ./node_modules/.bin/webpack -v
   ```


## 四、开启 ```webpack``` 构建之旅
