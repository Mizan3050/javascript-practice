var threeSum = function(nums) {
    nums.sort((a,b)=> a-b);
    const answerArray = [];
    console.log(nums);
    if(nums.length < 3){
        return answerArray;
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            break;
        }
        if(i > 0 && nums[i]===nums[i-1]){
            continue;
        }
        let low = i+1;
        let high = nums.length-1;

        while(low<high){
            const sum = nums[i]+nums[low]+nums[high];
            console.log(i,low,high);
            if(sum > 0){
                high--;
            } else if (sum < 0){
                low++;
            } else if(sum === 0){
                answerArray.push([nums[i],nums[low],nums[high]]);
                let lowestOccurrence = nums[low];
                let hightestOccurence = nums[high];

                while(low<high && nums[low]===lowestOccurrence){
                    low++;
                }
                while (low<high && nums[high] === hightestOccurence){
                    high--;
                }
            }
        }
    }
    return answerArray;
};

console.log(threeSum([-1,0,1,2,-1,-4]))