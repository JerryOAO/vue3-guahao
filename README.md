# 该项目中注意的问题



### vite 的路径问题

<img :src="`src/assets/images/web-banner-${item}.png`" alt="" />

------

### 子组件通讯

子组件给父组件传递
1、在父组件中找到子组件标签，给子组件标签绑定一个自定义属性
例如:  

```vue
<!-- 医院等级子组件 -->
<level @getLevel="getLevel"/>
```

2、在子组件vue中，找到需要传递的数据，通过this.$emit('getLevel',this.level)传递给父组件
例如: 

```vue
@click="changeRegion(item.value)"

const changeRegion = (region:string) => {
  regionFlag.value = region
  $emit('getRegion',region)
}
```

3、在父组件中，通过@getLevel="getLevel"接收子组件传递的数据
例如:

```vue
const getLevel = (level:string) => {
  levelFlag.value = level
}
```

------

