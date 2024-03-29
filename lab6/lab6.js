/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/


function testTime() {
    let start = new Date().getMinutes();
    let times = 1;
    let result = 1;
    let judge = true;

    function fn() {
        let now = (new Date()).getMinutes();

        if (now > start && judge) {
            console.log("the time has run out");
            judge = false;
        }
        if (now <= start && times <= 10) {
            result *= 2;
            times++;
            console.log(result);
        }
    }

    setInterval(fn, 5000);
    return fn();
}

testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone, mail) {
    let a = new RegExp(/^1[3456789]\d{9}$/);
    let b = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
    let telephoneJudge = a.test(telephone);
    let mailJudge = b.test(mail);

    if (telephoneJudge && mailJudge) {
        console.log("both the telephone and the mail is right");
    }
    if (telephoneJudge && !mailJudge) {
        console.log("the telephone is right and the mail is wrong");
    }
    if (!telephoneJudge && mailJudge) {
        console.log("the mail is right and the telephone is wrong");
    }
    if (!telephoneJudge && !mailJudge) {
        console.log("neither the telephone nor the mail is right");
    }
}

testMail("13588088888","sdfsd@qq.com")
/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let word = str.split(" ");
    let result = new Set();
    for (let i = 0; i < word.length; i++) {
        let pattern = new RegExp(word[i], "i");
        if (pattern.test(word[i + 1]) && result.size < 10) {
            result.add(word[i] + " " + word[i + 1]);
        }
    }
    console.log(result)
}

testRedundancy("if IF dd dd fff ffF fe th fe")

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let letter = actualInput.split("");

    for (let i = 0; i < letter.length; i++) {
        let pattern = new RegExp(letter[i], "ig");
        wantInput = wantInput.replace(pattern, "");
    }
    let result = new Set(wantInput.toUpperCase().split(""));
    console.log(result);
}

testKeyBoard("you know you love me", "yuknwyulveme");
testKeyBoard("And i dance all day when you wrap my hope","n i nce ll y when you wrp my hope")

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let word = str.split(" ");
    let newWord = [];
    let result;

    for (let i = 0; i < word.length; i++) {
        if (word[word.length - 1 - i] !== "") {
            newWord[newWord.length] = (word[word.length - 1 - i]);
        }
    }
    result = newWord.join(" ");//将数组转换成字符串再输出更好吧？
    console.log(result)
}

testSpecialReverse("But in the  end, it doesn't even matter   ");
testSpecialReverse("Promise, we can  always get through !");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let list = new Map();
    for (let i = 0; i < nums.length; i++) {
        list.set(nums[i], i);
        if (list.has(target - nums[i])) {
            console.log("[ " + [list.get(target - nums[i]), i] + " ]");
        }
    }
}

twoSum([2, 7, 11, 15], 9);
twoSum([1, 2, 3, 4], 5);

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let s = '';//当前最长字串
    let list = new Map();
    let lens = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        let index = s.indexOf(char)
        list.set(index, char);
        if (index === -1) {
            s += char;
            if (lens < s.length) lens = s.length;
        } else {
            s = s.substr(index + 1) + char;
        }
    }
    console.log(lens);
}

lengthOfLongestSubstring("abccdd");
lengthOfLongestSubstring("abbb");

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function () {
        console.log("Hi,i am a developing country.");
    }
}

function PoorCountry() {
}

PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
}

let developedCountry = Object.create(new Country());
developedCountry.sayHappy = function () {
    console.log("I am a Happy developed country.");
}

let developingCountry = new DevelopingCountry();
let poorCountry = new PoorCountry();
developingCountry.sayHi();
poorCountry.saySad();
developedCountry.sayHappy();
