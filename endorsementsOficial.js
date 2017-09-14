var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

function endorstmentsResult(endorsements) {
  var result = [];
  var index;

  for (var i = 0; i < endorsements.length; i++) {
    // search in result array if have same skill as endorsements array.
    index = result.findIndex(endorsement => endorsement.skill === endorsements[i].skill);

    // If skilll do not exist in the array.
    if (index === -1) {
      result.push({
        skill: endorsements[i].skill,
        user: [endorsements[i].user],
        count: 1
      });
    } else {
      result[index].user.push(endorsements[i].user);
      result[index].count += 1;
    }
  }

  return result;
}

endorstmentsResult(endorsements);
