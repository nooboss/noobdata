var _0x23ed=['setAttribute','stringify','setItemObject','title','div','onload','appendChild','setItem','click','removeChild','log','oldScroll','onscroll','prototype','square_container','length','createElement','localStorage','&isBanner=','parentNode','LOCAL\x20STORAGE\x20=>\x20AVAILABLE','block','class','getItem','splice','scrollTop','square_container_played','myBtn','scrollY','addEventListener','body','getItemObject','content','location','square3','display','img','parse','arrayPlayedListSaved\x20=\x20','src','message','documentElement','game.html','createTextNode','unshift','&nbsp;&#9650;&nbsp','LOCAL\x20STORAGE\x20=>\x20NON\x20-\x20AVAILABLE','innerHTML','pop','getElementById','?gsc=','square4','EXCEPTION\x20PLAYED\x20LIST\x20=>\x20','container_parent','forEach','game_name','style','href','button'];(function(_0x20df96,_0x23ed06){var _0x5d1a8e=function(_0xc50c6c){while(--_0xc50c6c){_0x20df96['push'](_0x20df96['shift']());}};_0x5d1a8e(++_0x23ed06);}(_0x23ed,0x6c));var _0x5d1a=function(_0x20df96,_0x23ed06){_0x20df96=_0x20df96-0x0;var _0x5d1a8e=_0x23ed[_0x20df96];return _0x5d1a8e;};var MAX_LENGTH_OF_PLAYED_LIST=0x8;var arrayPlayedList=[];var gFramePath=_0x5d1a('0x34');function play(_0x18f6a9,_0x373b35){var _0x1f6789=indexOfObjectInArray(arrayPlayedList,_0x373b35);if(_0x1f6789<0x0){arrayPlayedList[_0x5d1a('0x36')](_0x373b35);if(arrayPlayedList[_0x5d1a('0x19')]>MAX_LENGTH_OF_PLAYED_LIST){arrayPlayedList[_0x5d1a('0x3a')]();}}else{arrayMoveItem(arrayPlayedList,_0x1f6789,0x0);}localStorage[_0x5d1a('0xc')](ks_PLAYED_LIST,arrayPlayedList);if(arrayGames[_0x18f6a9][0x5]!==LINK_CUSTOM){window[_0x5d1a('0x2b')][_0x5d1a('0x8')]=gFramePath+_0x5d1a('0x1')+arrayGames[_0x18f6a9][0x6]+'&isBanner='+arrayGames[_0x18f6a9][0x2]+'&isDirect='+LINK_DIRECT;}else{window[_0x5d1a('0x2b')]['href']=gFramePath+_0x5d1a('0x1')+arrayGames[_0x18f6a9][0x1]+_0x5d1a('0x1c')+arrayGames[_0x18f6a9][0x2]+'&isDirect='+ +LINK_CUSTOM;}}function createPlayedList(){if(!isAvailableLocalStorage()){return;}Storage['prototype'][_0x5d1a('0xc')]=function(_0x1ab577,_0x53d8d3){this[_0x5d1a('0x11')](_0x1ab577,JSON[_0x5d1a('0xb')](_0x53d8d3));};Storage[_0x5d1a('0x17')][_0x5d1a('0x29')]=function(_0x29995e){var _0x3ed015=this[_0x5d1a('0x21')](_0x29995e);return _0x3ed015&&JSON[_0x5d1a('0x2f')](_0x3ed015);};var _0x4cda16=localStorage[_0x5d1a('0x29')](ks_PLAYED_LIST);console[_0x5d1a('0x14')](_0x5d1a('0x30'));console[_0x5d1a('0x14')](_0x4cda16);if(_0x4cda16===null||_0x4cda16===undefined){return;}if(_0x4cda16[_0x5d1a('0x19')]===0x0){return;}arrayPlayedList=_0x4cda16;var _0x38affa=document['getElementById'](_0x5d1a('0x4'));var _0x1d1b6b=document[_0x5d1a('0x1a')]('div');try{_0x38affa[_0x5d1a('0x10')](_0x1d1b6b);_0x1d1b6b[_0x5d1a('0xa')]('class',_0x5d1a('0x24'));arrayPlayedList[_0x5d1a('0x5')](function(_0x482cdd,_0x1f6c89){var _0x5eefab=searchObjectInArray(_0x482cdd,arrayGames);if(_0x5eefab>=0x0){createGameItem(_0x1d1b6b,_0x5d1a('0x2'),'game_name',arrayGames[_0x5eefab][0x0],0x0,arrayGames[_0x5eefab][0x4],_0x5eefab,![]);}});}catch(_0x53ae15){console[_0x5d1a('0x14')](_0x5d1a('0x3')+_0x53ae15[_0x5d1a('0x32')]);try{if(_0x1d1b6b){_0x1d1b6b[_0x5d1a('0x1d')][_0x5d1a('0x13')](_0x1d1b6b);}arrayPlayedList[_0x5d1a('0x19')]=0x0;localStorage['setItemObject'](ks_PLAYED_LIST,arrayPlayedList);}catch(_0x10f84b){}}}function searchObjectInArray(_0x301162,_0x30eb41){for(var _0x2e98ff=_0x30eb41['length'];--_0x2e98ff>=0x0;){if(_0x30eb41[_0x2e98ff][0x0]===_0x301162){return _0x2e98ff;}}return-0x1;}function createGameList(){var _0x56164a=document[_0x5d1a('0x0')](_0x5d1a('0x4'));var _0x32eb5f=document[_0x5d1a('0x1a')](_0x5d1a('0xe'));_0x56164a[_0x5d1a('0x10')](_0x32eb5f);_0x32eb5f[_0x5d1a('0xa')](_0x5d1a('0x20'),_0x5d1a('0x18'));arrayGames[_0x5d1a('0x5')](function(_0x57cbf0,_0x2ceb75){createGameItem(_0x32eb5f,_0x5d1a('0x2c'),_0x5d1a('0x6'),_0x57cbf0[0x0],_0x57cbf0[0x3],_0x57cbf0[0x4],_0x2ceb75,!![]);});}function createGameItem(_0x2011f2,_0x5eddb1,_0x3080cb,_0x3fd3b6,_0x10a703,_0x5473b2,_0x5a4e18,_0x3755cb){var _0x4d7ae0=document[_0x5d1a('0x1a')](_0x5d1a('0xe'));_0x4d7ae0[_0x5d1a('0xa')](_0x5d1a('0x20'),_0x5eddb1);_0x2011f2[_0x5d1a('0x10')](_0x4d7ae0);var _0x1e92e9=document[_0x5d1a('0x1a')](_0x5d1a('0xe'));_0x1e92e9['setAttribute'](_0x5d1a('0x20'),_0x5d1a('0x2a'));_0x4d7ae0[_0x5d1a('0x10')](_0x1e92e9);var _0x16ea5d=document[_0x5d1a('0x1a')]('a');_0x1e92e9[_0x5d1a('0x10')](_0x16ea5d);_0x16ea5d[_0x5d1a('0xa')](_0x5d1a('0x8'),'javascript:play('+_0x5a4e18+',\x22'+_0x3fd3b6+'\x22)');var _0x24d9b4=document['createElement'](_0x5d1a('0x2e'));_0x24d9b4[_0x5d1a('0x31')]=_0x5473b2;_0x16ea5d[_0x5d1a('0x10')](_0x24d9b4);if(_0x3755cb){var _0x437fa7=document[_0x5d1a('0x1a')]('p');_0x437fa7[_0x5d1a('0xa')](_0x5d1a('0x20'),_0x3080cb);_0x16ea5d[_0x5d1a('0x10')](_0x437fa7);var _0x125d50=document[_0x5d1a('0x35')](_0x3fd3b6);_0x437fa7[_0x5d1a('0x10')](_0x125d50);}}function isAvailableLocalStorage(){try{var _0xdb2c21=_0x5d1a('0x1b')in window&&window[_0x5d1a('0x1b')]!==null;console[_0x5d1a('0x14')](_0x5d1a('0x1e'));return _0xdb2c21;}catch(_0x5453ae){console['log'](_0x5d1a('0x38'));return![];}console[_0x5d1a('0x14')](_0x5d1a('0x38'));return![];}function arrayMoveItem(_0x3211bb,_0x1811cf,_0x4f21bb){var _0xa60a3f=_0x3211bb[_0x1811cf];_0x3211bb[_0x5d1a('0x22')](_0x1811cf,0x1);_0x3211bb[_0x5d1a('0x22')](_0x4f21bb,0x0,_0xa60a3f);}function indexOfObjectInArray(_0x311a05,_0x4befd1){var _0x2b42a5=_0x311a05[_0x5d1a('0x19')];while(_0x2b42a5--){if(_0x311a05[_0x2b42a5]===_0x4befd1){return _0x2b42a5;}}return-0x1;}window[_0x5d1a('0xf')]=function(){var _0x1728cc=document[_0x5d1a('0x1a')](_0x5d1a('0xe'));_0x1728cc['id']=_0x5d1a('0x4');_0x1728cc[_0x5d1a('0xa')](_0x5d1a('0x20'),_0x5d1a('0x4'));document[_0x5d1a('0x28')][_0x5d1a('0x10')](_0x1728cc);createPlayedList();createGameList();var _0x1119a5=document['createElement'](_0x5d1a('0x9'));_0x1119a5[_0x5d1a('0xa')](_0x5d1a('0xd'),'Go\x20to\x20top');_0x1119a5['id']=_0x5d1a('0x25');_0x1119a5[_0x5d1a('0x39')]=_0x5d1a('0x37');document[_0x5d1a('0x28')][_0x5d1a('0x10')](_0x1119a5);_0x1119a5[_0x5d1a('0x27')](_0x5d1a('0x12'),function(){topFunction();});window[_0x5d1a('0x16')]=function(){if(this[_0x5d1a('0x15')]>this[_0x5d1a('0x26')]){document[_0x5d1a('0x0')](_0x5d1a('0x25'))['style'][_0x5d1a('0x2d')]='none';}else{document[_0x5d1a('0x0')](_0x5d1a('0x25'))[_0x5d1a('0x7')][_0x5d1a('0x2d')]=_0x5d1a('0x1f');}this[_0x5d1a('0x15')]=this['scrollY'];};};function topFunction(){document[_0x5d1a('0x28')][_0x5d1a('0x23')]=0x0;document[_0x5d1a('0x33')][_0x5d1a('0x23')]=0x0;}