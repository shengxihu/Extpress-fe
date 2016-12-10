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
    width: 44% !important;
}
iframe {
    overflow: scroll !important;
    width: 100% !important;
    height: 100vh !important;
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
                <panel  v-if="item == '促销'" :footer="footer" :list="list4" type="1"></panel>
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
                    <x-input class="weui_cell_num" title="单号">
                        <icon type="search"></icon>
                    </x-input>
                </group>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
    import AddressChinaData from '../../mock/china-area-data.js'
    import { Icon, XButton, Address, Swiper, Tab, TabItem, SwiperItem, Panel, Group, Cell, XInput, XNumber, Datetime } from 'vux-components'
    module.exports = {
        data: function () {
            return {
                type: '3',
                list: [{
                        url: 'http://www.sf-express.com/cn/sc/express/product_service/Heavy-Cargo-Express/',
                        img: 'http://www.sf-express.com/cn/sc/.galleries/MKT/zhonghuokuaiyun_neiye_sc.jpg',
                        title: '重货快运'
                    }, {
                        url: 'http://www.sf-express.com/CN/sc/promotion/Exploring-this-Big-World-with-SF-ExpressShip-with-Us-Get-Your-Prize/?return-page=http%3A//www.sf-express.com/CN/ZH/',
                        img: 'http://www.sf-express.com/CN/en/.galleries/promotion/sfinternational_banner_sc.jpg',
                        title: '顺丰国际，你寄件，我送礼'
                    }, {
                        url: 'http://www.sf-express.com/cn/sc/express/product_service/SF-Next-Morning-Delivery/',
                        img: 'http://www.sf-express.com/hk/en/.galleries/MKT/chichen_0706.jpg',
                        title: '顺丰次晨（香港）'
                }],
                demo2: '美食',
                list2: ['运费', '公告', '促销', '网点', '查询'],
                index: 0,
                list3: [{
                        src: 'http://www.sf-express.com/.galleries/logoSC.png',
                        title: '2016年12月临时运力采购招标公告',
                        desc: '为寻求更多有实力的公路运输合作伙伴，顺丰速运有限公司现就部分临时运力需求进行全国性公开采购招标，本期招投标为线上系统招标，欢迎符合资格条件的供应商参加。',
                        url: 'http://www.sf-express.com/cn/sc/news/Announcement-of-Tender-Invitation-for-the-acquisition-of-the-Temporary-Highway-Transportation-Project/'
                    }, 
                    {
                        src: 'http://www.nanzhuang.com/uploads/allimg/150612/132955I26-5.jpg',
                        title: '顺丰国际特惠开通孟加拉国、斯里兰卡流向服务',
                        desc: '近日，顺丰国际特惠开通孟加拉国、斯里兰卡流向服务，满足客户更多国际快递寄件需求。',
                        url: 'http://www.sf-express.com/cn/sc/news/SF-International-Economy-Express-Service-Network-Expanding-to-Bangladesh-and-Sri-Lanka/'
                    },
                    {
                        src: 'http://pic70.nipic.com/file/20150624/7825193_132819420000_2.jpg',
                        title: '产销共赢 顺丰鲜行”甘青牛羊肉产销互联大会完美落幕',
                        desc: '2016年11月4日，由甘肃省商务厅指导、顺丰速运主办的“产销共赢，顺丰鲜行“甘青牛羊肉产销互联大会于兰州市飞天大酒店举办。',
                        url: 'http://www.sf-express.com/cn/sc/news/2016_11_08/'
                    },
                    {
                        src: 'http://pp.myapp.com/ma_icon/0/icon_11705140_20318174_1422005334/256',
                        title: '2016年电商物流/配送展：Last Mile Fulfillment Korea 2016',
                        desc: '顺丰速运韩国区（以下简称“顺丰韩国”）作为本次Last Mile Fulfillment Korea 2016（LMF, 2016年电商物流/配送展）主要赞助商出展并取得了良好的效果。',
                        url: 'http://www.sf-express.com/cn/sc/news/SF-at-Last-Mile-Fulfillment-Korea-2016-00001/'
                    },
                    {
                        src: 'http://pic.qiantucdn.com/58pic/18/42/83/91T58PICshr_1024.jpg',
                        title: '关于顺丰“双十一”期间收派服务调整通知',
                        desc: '随着“双十一”电商促销季的来临，快递行业将面临业务量激增的状况。顺丰速运已通过人力、物力、运力资源储备，操作模式调整等措施，保障 “双十一”期间的服务。',
                        url: 'http://www.sf-express.com/cn/sc/news/Announcement-about-Pickup-and-Delivery-Service-Adjustment-during-the-Double-11-Shopping-Festival-00001/'
                    },
                    {
                        src: 'http://i1.s2.dpfile.com/pc/e540fad538e9209fa85c74501f1457c8(700x700)/thumb.jpg',
                        title: '高峰时效，‘寄’时掌控 ——关于高峰期顺丰速运时效标准的公告',
                        desc: '随着年底寄件高峰的到来，快递业务量将面临激增的状态。',
                        url: 'http://www.sf-express.com/cn/sc/news/Transit-Time-During-Peak-Season-Traceable-Upon-Shipping-Announcement-about-SFs-Transit-Time-Standards-During-Peak-Season/'
                    }
                ],
                list4: [{
                        src: 'http://www.sf-express.com/cn/en/.galleries/promotion/2016/fapiao1.jpg',
                        title: '发票e时代，无纸更精彩',
                        desc: '不用再吐槽收派员开票的龟速，不用再打电话催送发票。发票随用随打印，这样的美好时代实现啦！',
                        url: 'http://www.sf-express.com/cn/sc/promotion/1031fapiaoeshidai/?return-page=http%3A//www.sf-express.com/cn/sc/promotions/index.html_633079450.html'
                    },
                    {
                        src: 'http://sfbuyimg.sfbuy.com/Page_picture/affiche/4c69c7e8-1043-46a7-ba65-dd49e5d6df62.png',
                        title: '澳门自提上线双重喜，RMB 180优惠券任性送',
                        desc: '海购丰运进口转运（美、日、韩到中国大陆及港澳台流向）开通澳门自提线路啦！仲夏6月，双重优惠好礼让你海淘high翻天。',
                        url: 'http://www.sfbuy.com/new/getNoticeById/D5914ECD58784FDB9431B8F56FE4D2F7'
                    },
                    {
                        src: 'http://www.sf-express.com/cn/en/.galleries/promotion/2016/20160603-SFs-Great-Deal-text_banner-sc.jpg',
                        title: '钜惠上线】顺丰卡充值返现5%，5.31-6.8首充有机会再送50元大礼包！数量有限，随机派发，绝不能错过！',
                        desc: '从未充值顺丰电子卡的用户在活动期间完成首次充值100元以上（含100元），即有机会额外获赠50元顺丰优惠券大礼包（由10元、5元、2元优惠券组成）！每日名额有限，随机派发。',
                        url: 'http://www.sf-express.com/cn/sc/promotion/Great-Deal-5-Rebates-for-Recharge-of-SF-Card-Additional-RMB-50-Rebates-for-Initial-Recharge-During-5.31-6.8-Limited-Quota-Random-Distribution-Hurry-Up/?return-page=http%3A//www.sf-express.com/cn/sc/promotions/index.html_1787792738.html'
                    },
                    {
                        src: 'http://oev2d4dz7.bkt.clouddn.com/img_1.png',
                        title: '年年有鱼，顺丰领鲜',
                        desc: '活动时间: 2016.12.9 - 2016.12.31',
                        url: 'http://www.sf-express.com/cn/sc/promotion/b9b93c08-bdea-11e6-aacc-a0369f4fdae2/'
                    }, 
                    {
                        src: 'http://www.nanzhuang.com/uploads/allimg/150612/132955I26-5.jpg',
                        title: '年货回家，一路顺丰',
                        desc: '将心意打包，用顺丰传递',
                        url: 'http://www.sf-express.com/cn/sc/promotion/Deliver-New-Year-Necessities-with-SF/'
                    },
                    {
                        src: 'http://www.sf-express.com/cn/en/.galleries/promotion/baobeibao_pro_sc.jpg',
                        title: '顺丰宝贝保，专治双十一忧虑症',
                        desc: '有了顺丰宝贝保，快递收件再无忧',
                        url: 'http://www.sf-express.com/cn/sc/promotion/SF-Shipment-Insurance-A-Cure-to-Your-Double-11-Anxiety/'
                    }
                ],
                footer: {
                    title: '查看更多',
                    url: 'http://www.sf-express.com/cn/sc/'
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
            XButton,
            Icon
        },
    }
</script>