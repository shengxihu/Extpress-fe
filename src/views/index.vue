<style scoped>
@import '~vux/dist/vux.css';
.hide {
    display: none;
}
.tab-swiper {
  background-color:darkred;
  height: 100px;
}
._bt {
    width: 66% !important;
}
iframe {
    overflow: scroll !important;
    width: 100% !important;
}
.weui_cell_num {
    border: 1px solid silver;
    border-left: 0;
    border-right: 0;
}
</style>

<template>
    <div class='index'>
        <swiper :list="list" auto></swiper>
        <tab :line-width=2 active-color='#fc378c' :index.sync="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
        </tab>
        <swiper :index.sync="index" :show-dots="false">
            <swiper-item v-for="item in list2">
                <panel v-if="item == '公告'" :footer="footer" :list="list3" :type="type"></panel>
                <panel  v-if="item == '促销'" :footer="footer" :list="list3" type="1"></panel>
                <group v-if="item == '运费'" title="运费时效查询">
                    <x-input title="原寄地"></x-input>
                    <x-input title="目的地"></x-input>
                    <x-number title="重量（kg）" :value=0 :min=0 :max=100></x-number>
                    <datetime title="寄件时间" :min-year=2016 :max-year=2017 format="YYYY-MM-DD"></datetime>
                </group>
                <div v-if="item == '网点'">
                    <address title="您所在地址" :value.sync="value_f" :list="addressData"></address>
                    <iframe src="http://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E9%A1%BA%E4%B8%B0&c=218&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&src=0/vt=map"></iframe>
                </div>
                <group v-if="item == '查询'" title="物流信息查询">
                    <x-input class="weui_cell_num" title="单号"></x-input>
                    <x-button plain class="_bt" type="primary">提交</x-button>
                </group>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
    import AddressChinaData from '../../mock/china-area-data.js'
    import { XButton, Address, Swiper, Tab, TabItem, SwiperItem, Panel, Group, Cell, XInput, XNumber, Datetime } from 'vux-components'
    module.exports = {
        data: function () {
            return {
                type: '3',
                list: [{
                        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
                        img: 'http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg',
                        title: '如何手制一份秋意的茶？'
                    }, {
                        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
                        img: 'http://image5.tuku.cn/wallpaper/Landscape%20Wallpapers/8294_2560x1600.jpg',
                        title: '茶包VS原叶茶'
                    }, {
                        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
                        img: 'http://soft.yesky.com/imagelist/2009/114/g498ismdy3j5.jpg',
                        title: '播下茶籽，明春可发芽？'
                }],
                demo2: '美食',
                list2: ['运费', '公告', '促销', '网点', '查询'],
                index: 0,
                list3: [{
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '标题一',
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        url: '/component/cell'
                    }, 
                    {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '标题二',
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    },
                    {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '标题二',
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    },
                    {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '标题二',
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    },
                    {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '标题二',
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    },
                    {
                        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        title: '标题二',
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        url: {
                            path: '/component/radio',
                            replace: false
                        }
                    }
                ],
                footer: {
                    title: '查看更多',
                    url: 'http://vux.li'
                },
                addressData: AddressChinaData,
            }
        },
        components:{
            Swiper,
            Tab,
            TabItem,
            SwiperItem,
            Panel,
            Group, 
            Cell, 
            XInput,
            XNumber,
            Datetime,
            Address,
            XButton
        },
    }
</script>