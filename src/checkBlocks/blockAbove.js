const checkBlocks = {BotT:"bott",LTC:"ltc",FW:"fw",LBC:"lbc",BlockSV:"blocksv",BlockSH:"blocksh",Empty:"empty",RBC:"rbc",RTC:"rtc",TopT:"topt",LeftT:"leftt",RightT:"rightt"};
let bott = {a:"open",b:"open",c:"open",d:"closed"};
let ltc = {a:"closed",b:"closed",c:"open",d:"open"};
let fw = {a:"open",b:"open",c:"open",d:"open"};
let lbc = {a:"closed",b:"open",c:"open",d:"closed"};
let blocksv = {a:"closed",b:"open",c:"closed",d:"open"};
let blocksh = {a:"open",b:"closed",c:"open",d:"closed"};
let empty = {a:"closed",b:"closed",c:"closed",d:"closed"};
let rbc = {a:"open",b:"open",c:"closed",d:"closed"};
let rtc = {a:"open",b:"closed",c:"closed",d:"open"};
let topt = {a:"open",b:"closed",c:"open",d:"open"};
let leftt = {a:"open",b:"open",c:"closed",d:"open"};
let rightt = {a:"closed",b:"open",c:"open",d:"open"};





const blockAbove = (top,current) => {
    let topAllowableBottom = top.d;
    topAllowableBottom.forEach((x) => {
        if (current===x) {
            return true;
        }
    }





};

export default blockAbove;