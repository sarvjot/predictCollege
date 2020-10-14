
function isPresent(modifiedList, college) {
    for(var i=0; i < modifiedList.length; i++){
      modifiedCollege = modifiedList[i];
      // console.log(college.institute_name == modifiedCollege.institute_name);
      if (college.institute_name === modifiedCollege.institute_name) {
        break;
      }
    };
    if(i === modifiedList.length){
      return -1;
    }else{
      return i;
    }
  }
  
  function dataModifier(arr) {
    var list = [];
    arr.forEach((college) => {
      var index = isPresent(list, college);
      // console.log(index);
      if (index === -1) {
        list.push({
          institute_name: college.institute_name,
          branches: [
            {
              branch_name: college.branch_name,
              alloted_quota: college.alloted_quota,
              Category: college.Category,
              seat_pool: college.seat_pool,
              opening_rank: college.opening_rank,
              closing_rank: college.closing_rank,
              iit: college.iit,
            },
          ],
        });
      } else {
        list[index].branches.push({
          branch_name: college.branch_name,
          alloted_quota: college.alloted_quota,
          Category: college.Category,
          seat_pool: college.seat_pool,
          opening_rank: college.opening_rank,
          closing_rank: college.closing_rank,
          iit: college.iit,
        });
      }
    });
  
    return list;
  }
  
  
  // Requiring fs module in which 
  // writeFile function is defined. 
  const fs = require('fs') 
    
  
    
  // Write data in 'Output.txt' . 
  fs.writeFile('Output.js', JSON.stringify(dataModifier(data)), (err) => { 
        
      // In case of a error throw err. 
      if (err) {
        console.log(err);
      } 
  }) 