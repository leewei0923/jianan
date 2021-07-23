/*
mod_id:'',   用来标识当前是哪一个页面(身份证)
mod_data:[   用来展示具体内容
            {
                c_id:'',
                c_data:[
                    {
                id:'',  用户的标识
                name:'', 用户名
                time:'',  提交的时间
                avator:'', 提交者的头像
                like:'',    喜欢者的数量         
                content:''  提交的内容
            },
                ]
            }
            
        ]
    
*/

module.exports.message = [
    {
        mod_id: '0',   //相匹配Dpid
        mod_data: [      //相匹配Dcid
            {
                c_id: '00',
                c_data: [
                    {
                        id: '0',  //本身id数据
                        name: '小红',
                        time: '2021.07.18',
                        avator: '/images/qcmap/man.jpg',
                        like: '2',
                        content: '真棒'
                    },
                    {
                        id: '1',
                        name: '小名',
                        time: '2021.07.19',
                        avator: '/images/qcmap/man.jpg',
                        like: '2',
                        content: '还挺不错的呢'
                    },
                ]
            },
            {
                c_id: '02',
                c_data: [
                    {
                        id: '0',  //本身id数据
                        name: '小花',
                        time: '2021.07.18',
                        avator: '/images/qcmap/man.jpg',
                        like: '2',
                        content: '真棒'
                    }

                ]
            },
            {
                c_id: '01',
                c_data: [
                    {
                        id: '0',  //本身id数据
                        name: '小明',
                        time: '2021.07.18',
                        avator: '/images/qcmap/man.jpg',
                        like: '2',
                        content: '真棒'
                    }

                ]
            }

        ]
    },

]



