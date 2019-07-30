/*
This problem was asked by Google.

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.
*/

/*

from the string construction, we see that:

\n = "carraige return" = new sub tree starts
\t = "tab" = "new document/folder"
"." = extension = all files have extensions.  Folders do not.

we note that there is no "collapsed" tree - the entire folder and file structure is displayed at once.

*/

const findLongString = (yourString) => {
  let found = yourString.indexOf('.');
  if (found == -1) {return 0}
  let firstpart = yourString.slice(0,found)
  return firstpart;
}

let test1 = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
let test2 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"

console.log(test1)
console.log(findLongString(test1))

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
});
