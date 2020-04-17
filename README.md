# stepup

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Tips
大图片建议放到public，小图片建议放到asees里面（icon,css图片）：webpack会抽取图片资源，大的图片当做一个请求去加载，小的图片会打包成base64，这些事webpack内置的一些配置，因为base64之后会少一个请求，以提高前端的性能