const app = getApp()

const news = app.globalData.qdc.news
Page({
    data: {
        photoSet: {
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500
        },
        photos: [{
                url: "",
                path: "/images/img/indexImg/01.jpg",
                text: "测试一"
            },
            {
                url: "",
                path: "/images/img/indexImg/02.jpg",
                text: "测试二"
            }
        ],

        navbarInitTop: 0, //导航栏初始化距顶部的距离
        isFixedTop: false, //是否固定顶部
        news:news
        
    },
    onLoad: function() {
        // 获取到系统信息
        // tt.getSystemInfo({
        //   success: (res) => {
        //     console.log(res)
        //   }
        // });

        
    },
    onReady: function() {
        var that = this;
        if (that.data.navbarInitTop == 0) {
            const query = tt.createSelectorQuery();
            query.select("#navbar").boundingClientRect(function(res) {
                //获取当前的高度
                // console.log(res) //查
                if (res && res.top > 0) {
                    let navbarInitTop = parseInt(res.top);
                    that.setData({
                        navbarInitTop: navbarInitTop
                    });
                }
            });
            query.exec();
        }
    },

    /**
     * 监听页面滑动事件
     */
    onPageScroll: function(e) {
        
        let that = this;
        // console.log(that.data.navbarInitTop)//查
        // console.log(that.data.isFixedTop) //查
        let scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度
        // console.log(e.scrollTop) //查
        //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
        let isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
        //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
        if (that.data.isFixedTop === isSatisfy) {
            return false;
        }
        that.setData({
            isFixedTop: isSatisfy
        });
    },

    toDetail:function(e){

        console.log("80序列"+e.currentTarget.dataset.id)
        let currentIdx = e.currentTarget.dataset.id
        tt.navigateTo({
          url: "/pages/index/newsDetail/newsDetail?nid="+currentIdx, // 指定页面的url
        });
    }

})