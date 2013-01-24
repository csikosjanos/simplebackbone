window.JST = {};

window.JST['item/line'] = _.template('<span style="color:black;"><%= part1 %> <%= part2 %></span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
window.JST['list'] = _.template('<button id="add">Add list item</button><ul></ul>');