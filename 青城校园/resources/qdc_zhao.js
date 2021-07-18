//模拟json数据
/*
批次:
本:0,
专:1,
专升本:2
*/

var zhaoSheng = [
    {
        id: 'zhao_kuaiji',
        name: '会计系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "财务管理（CFA）",
                        duration: "4年",
                        degree: "财务管理（管理学学士）"

                    },
                    {
                        z_id: 1,
                        name: "互联网金融（FRM）",
                        duration: "4年",
                        degree: "互联网金融（经济学学士）"
                    },
                    {
                        z_id: 2,
                        name: "互联网金融（FRM）",
                        duration: "4年",
                        degree: "互联网金融（经济学学士）"
                    },
                    {
                        z_id: 3,
                        name: "互联网金融（FRM）",
                        duration: "4年",
                        degree: "互联网金融（经济学学士）"
                    },
                    {
                        z_id: 4,
                        name: "会计学（ACCA）",
                        duration: "4年",
                        degree: "会计学（管理学学士）"
                    },
                    {
                        z_id: 5,
                        name: "会计学（AIA）",
                        duration: "4年",
                        degree: "会计学（管理学学士）"
                    },
                    {
                        z_id: 6,
                        name: "会计学（CIMA）",
                        duration: "4年",
                        degree: "会计学（管理学学士）"
                    },
                    {
                        z_id: 7,
                        name: "审计学（CIA）",
                        duration: "4年",
                        degree: "审计学（管理学学士）"
                    }
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },

    {
        id: 'zhao_jidian',
        name: '机电工程系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "电气工程及其自动化",
                        duration: "4年",
                        degree: "电气工程及其自动化（工学学士）"

                    },
                    {
                        z_id: 1,
                        name: "机器人工程",
                        duration: "四年",
                        degree: "机器人工程（工学学士）"
                    },
                    {
                        z_id: 2,
                        name: "机械设计制造及其自动化",
                        duration: "4年",
                        degree: "机械设计制造及其自动化（工学学士）"
                    }
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },

    {
        id: 'zhao_jisuanji',
        name: '计算机',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "计算机科学与技术",
                        duration: "四年",
                        degree: "计算机科学与技术（工学学士）"

                    },
                    {
                        z_id: 1,
                        name: "软件工程",
                        duration: "四年",
                        degree: "软件工程（工学学士）"
                    },
                    {
                        z_id: 2,
                        name: "数据科学与大数据技术",
                        duration: "四年",
                        degree: "数据科学与大数据技术（工学学士）"

                    },
                    {
                        z_id: 3,
                        name: "网络工程",
                        duration: "四年",
                        degree: "网络工程（工学学士）"

                    },
                    {
                        z_id: 4,
                        name: "物联网工程",
                        duration: "四年",
                        degree: "物联网工程（工学学士）"

                    },
                    
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },
    {
        id: 'zhao_jianzhu',
        name: '建筑系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "城乡规划",
                        duration: "5年",
                        degree: "城乡规划（工学学士）"

                    },
                    {
                        z_id: 1,
                        name: "建筑学",
                        duration: "5年",
                        degree: "建筑学（工学学士）"
                    }
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },
    {
        id: 'zhao_jingmao',
        name: '经贸系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "国际经济与贸易",
                        duration: "4年",
                        degree: "国际经济与贸易（经济学学士）"

                    },
                    {
                        z_id: 1,
                        name: "市场营销(大数据营销方向)",
                        duration: "4年",
                        degree: "市场营销（管理学学士）"
                    },
                    {
                        z_id: 2,
                        name: "物流管理",
                        duration: "4年",
                        degree: "物流管理（管理学学士）"
                    }
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },
    {
        id: 'zhao_tumu',
        name: '土木工程系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "工程管理",
                        duration: "四年",
                        degree: "工程管理（工学学士）"

                    },
                    {
                        z_id: 1,
                        name: "工程造价",
                        duration: "四年",
                        degree: "工程造价（工学学士）"
                    },
                    {
                        z_id: 2,
                        name: "土木工程",
                        duration: "四年",
                        degree: "土木工程（工学学士）"
                    },
                    {
                        z_id: 3,
                        name: "智能建造",
                        duration: "四年",
                        degree: "智能建造（工学学士）"
                    },

                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },
    {
        id: 'zhao_yishu',
        name: '艺术系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "动画",
                        duration: "4年",
                        degree: "动画（艺术学学士）"

                    },
                    {
                        z_id: 1,
                        name: "环境设计",
                        duration: "4年",
                        degree: "环境设计（艺术学学士）"
                    },
                    {
                        z_id: 2,
                        name: "视觉传达设计",
                        duration: "4年",
                        degree: "视觉传达设计（艺术学学士）"
                    },
                    {
                        z_id: 3,
                        name: "数字媒体艺术",
                        duration: "	4年",
                        degree: "数字媒体艺术（艺术学学士）"
                    }
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    },
    {
        id: 'zhao_waiyu',
        name: '外语系',
        isChild: true,
        classification: [
            {
                id: 0,
                zhuanye: [
                    {
                        z_id: 0,
                        name: "德语",
                        duration: "四年",
                        degree: "德语（文学学士）"

                    },
                    {
                        z_id: 1,
                        name: "俄语",
                        duration: "四年",
                        degree: "俄语（文学学士）"

                    },
                    {
                        z_id: 2,
                        name: "法语",
                        duration: "四年",
                        degree: "	法语（文学学士）"

                    },
                    {
                        z_id: 3,
                        name: "汉语国际教育",
                        duration: "四年",
                        degree: "中国语言文学（文学学士）"
                    },
                    {
                        z_id: 4,
                        name: "商务英语",
                        duration: "四年",
                        degree: "商务英语（文学学士）"
                    },
                    {
                        z_id: 5,
                        name: "英语",
                        duration: "四年",
                        degree: "英语（文学学士）"
                    },
                ]
            },
            {
                id: 1,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },
            {
                id: 2,
                zhuanye: [
                    {
                        id: 0,
                        name: "",
                        duration: "",
                        degree: ""

                    },
                    {
                        id: 1,
                        name: "",
                        duration: "",
                        degree: ""
                    }
                ]
            },

        ]
    }


]
//导出数据
module.exports = {
    dataList: zhaoSheng
}
