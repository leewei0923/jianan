# 线性表

## 算法时间复杂度

1.算法的时间复杂度是程序运行的从开始到结束所需要的时间。

```C
float sum(float list[],const int n)
{
  float tempsum = 0.0;
  for(int i = 0; i < n ; i++)
  tempsum += list[i]
  return tempsum
}
```
2. 渐进时间复杂度

## 线性表


```C
线性表的顺序表示定义如下:
tyoedef struct seqList 
{
  int n;
  int maxLength;
  ElemType*element;

}
SeqList;
```

ElemType 是自定义类型,在实际使用时,用户可以根据实际需要将ElemType 具体定义为所需类型,可以是int ,float等基本数据
```
Init(L): 初始化运算

构造一个空的线性表，若初始化成功返回ok，否则ERROR

Destory(L):撤销运算

判断线性表是否存在，存在则撤销线性表

```

### 2.2.2顺序表的运算

```
 theme: 顺序表的插入和删除运算
 date: 2021.05.18
 author: leewei
```
    

删除运算,将元素a删除;

```C
Status Delete(SeqList*L ,int){
  int j;
  if(i < 0|| i > L -> n-1) //下标I是否越界
  return ERROR
  if(!L -> n) // 顺序表是否为空
  return ERROR
  for(j = i + j ; j < L -> n; j++ ) 
  L -> element[j-1] = L - > element[j]; //从前往后逐个前移元素
  L -> n--; // 表长减1
  return OK 
}

```


### 2.3.1单链表的定义

```
复习:

# 线性表的顺序结构的优缺点:
- 优点: 随机存取
        存储空间利用率高
- 缺点: 插入,删除效率低
        必须按事先估计的最大元素个数分配
        连续的存储空间,难以临时扩大

```

链表中,不仅需要储存每个数据元素,还需储存其直接后继的存储地址,这两个部分数据信息组合起来称为结点.
结点包括两类域:

    # 
     - 数据域: 存储数据元素信息的域
     - 指针域: 存储直接后继存储地址的域.
     每个结点只包含指针域的链表,称为单链表
    
**单链表的结点结构**
|element|link|
|----|----|
数据|地址

```C
// 单链表类型的定义

typedef struct node 
{
  ElementType element; //结点的数据域
  struct node *link   //结点的指针域
}Node;
typedef struct singleList
{
  struct node* first;
  int n;
}SingleList;
```

    # 单链表的基本概念
     - 结构定义


### 2.3.2单链表的插入操作

    # 功能:
     - 在给定元素ai之后插入值为X的元素.
     - (a0,a1,......,ai+1,...., an-1)
插入语步骤

1. 生成数据域为x的的新结点,指针q指向新结点
2. 从头结点开始,找到元素ai所在结点,指针p指向该结点;
3. 将新结点插入在ai所在结点之后.
若 i = -1 ,则表示将新结点插入在元素a0之前;
若 i > -1,则表示将新结点插入在单链表的中间位置;


```C
Status Insert (StringleList*L,int i ,ElemType x)
{
  Node*p,*q;
  int j;
  if(i < -1 || i > L->n-1)
  return ERROR;
  p = L-> first;
  for(j = ;j < i; j++>)p = p->link;  //从头结点开始查找
  q = malloc(sizeof(Node)); //生成新结点q
  q -> element = x;
  if(i > -1)
  {
    q -> link = p ->link;  //新结点插在单链表中间位置的情况
    p ->link =q;
  }
  else
  {
    q ->link = L->first;  //新结点插在插在a0之前,成为新的头结点
    L->first=q;
  }
  L->n++  // 表长增加1
  return Ok;
}

```