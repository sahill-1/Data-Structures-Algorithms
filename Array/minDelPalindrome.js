function minDeletionPalindrome(s){
    function isPalindrome(str){
        let left = 0;
        let right = str.length-1;
        while(left<right){
            if(str[left] !== str[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function minDeletions(s, left, right){
        //if  string is empty or consists of one character only
        if(left >= right){
            return 0
        }

        if(s[left]===s[right]){
            return minDeletions(s, left+1, right-1)
        }
        else{
            return 1 + Math.min(minDeletions(s,left+1,right), minDeletions(s,left, right-1))
        }
    }
    return minDeletions(s, 0 , s.length-1)
}
let s = "aebcbda";
let result = minDeletionPalindrome(s);
console.log(result)