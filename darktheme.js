document.addEventListener('keydown', function(key){
    //if key is l shift
    if(key.keyCode == 16){
        monaco.editor.setTheme('vs-dark')
        
        document.getElementsByTagName('body')[0].style.backgroundColor = '#252526'
        
        //Theme the rest of the page (a lot of repetative code)
        document.getElementsByClassName('monaco-tree-rows show-twisties')[0].style.backgroundColor = '#1e1e1e' // Errors output
        document.getElementsByClassName('UITabs')[0].style.backgroundColor = '#1e1e1e' //Errors output
        document.getElementsByClassName('emptyLeftPanel')[0].style.backgroundColor = '#333333' // Looks, events sensing sidebar
        document.getElementsByClassName('toolboxcollapse')[0].style.backgroundColor = '#333333' // Collapse button for ^
        document.getElementsByClassName('tabs')[0].style.backgroundColor = '#1e1e1e'
        document.getElementsByClassName('labelDiv')[0].style.backgroundColor = '#1e1e1e' //Errors logo box
        document.getElementsByClassName('tab_btn flex_row curr')[0].style.backgroundColor = '#252526'; //Code logo box
        document.getElementsByClassName('tabbed_header flex_row justify_space_between')[0].style.backgroundColor = '#252526' //Bar under the top bar
        document.getElementsByClassName('topmenu justify_space_between')[0].style.backgroundColor = '#323233' //Top bar
        document.getElementsByClassName('project_name_wrapper flex_row')[0].style.backgroundColor = '#323233' //Program selector outline
        document.getElementsByClassName('project_icon_wrapper  flex_column justify_center')[0].style.backgroundColor = '#1e1e1e' //Little logo in the selector
        document.getElementsByClassName('tic flex_row')[0].style.backgroundColor = '#1e1e1e' //The second part of the selector
        document.getElementById('rc_wizard_wrapper').style.backgroundColor = '#252526' //Device wizard
        document.getElementsByClassName('card_row flex_row justify_space_between')[0].style.backgroundColor = '#333333' //Add device button
        document.getElementsByClassName('tabbed_header flex_row justify_space_between')[1].style.backgroundColor = '#252526' //Above add device button
        document.getElementsByClassName('command_list')[0].style.backgroundColor = '#252526' //Command list
        document.getElementsByClassName('language_selector')[0].children[1].style.color = 'white'//Language selector
        document.getElementsByClassName('language_selector')[0].children[1].style.backgroundColor = '#1e1e1e'//Language selector
        document.getElementsByClassName('connect_btn_brain_info')[0].style.backgroundColor = '#1e1e1e' //Brain info
        document.getElementsByClassName('showContent')[0].style.backgroundColor = '#1e1e1e' //Feedback menu
        document.getElementsByClassName('showContent')[0].style.color = 'white' //Feedback menu
        document.getElementsByClassName('sc-EHOje bCQumv')[0].style.backgroundColor = '#1e1e1e' //Feedback menu
        document.getElementsByClassName('sc-VigVT GhNuS')[0].style.backgroundColor = '#252526' //Feedback menu
        document.getElementsByClassName('sc-VigVT GhNuS')[2].style.backgroundColor = '#252526' //Feedback menu
        document.getElementsByClassName('sc-kAzzGY JXstW')[0].style.color = 'white' //Feedback menu
        document.getElementsByClassName('emailLabel')[0].style.color = 'white' //Feedback menu
        document.getElementsByClassName('debugLabel')[0].style.color = 'white' //Feedback menu
        
        makeWhite = document.getElementsByClassName('categoryText'); for (i = 0; i < makeWhite.length; i++) {makeWhite[i].style.color = 'white'}
        makeBlackish = document.getElementsByClassName('dropdownmenu_options'); for (i = 0; i < makeBlackish.length; i++) {makeBlackish[i].style.backgroundColor = '#1e1e1e'; makeBlackish[i].style.color = 'white'}
        whiteText  = document.getElementsByClassName('option flex_column'); for (i = 0; i < whiteText.length; i++) {whiteText[i].style.color = 'white'}
        //Brain connect menu
        var info_group = document.getElementsByClassName('info_group')[0]; for (i = 0; i < info_group.children.length; i++) {info_group.children[i].style.backgroundColor = '#1e1e1e'}
        
        document.getElementById('HELP-STATIC').addEventListener('click', function() {
            try {document.getElementsByClassName('help_system_wrapper')[0].style.backgroundColor = '#252526'}catch(e){}
        })
        
        document.getElementsByClassName('wizard_card_list')[0].addEventListener('click', function() {
            setTimeout(function(){
                document.getElementsByClassName('rc_card for_add_device')[0].style.backgroundColor = '#333333'
                document.getElementsByClassName('card_row flex_row justify_space_between')[0].style.backgroundColor = '#333333'
                document.getElementsByClassName('card_row flex_row justify_space_between')[1].style.backgroundColor = '#333333'
            },50)
        })
        
        document.getElementsByClassName('icon_wrapper for_svg flex_column justify_center')[2].addEventListener('click', function(){
            setTimeout(function(){
                document.getElementsByClassName('scene_content flex_column')[0].style.backgroundColor = '#1e1e1e'//Examples menu
                document.getElementsByClassName('scene_header')[0].style.backgroundColor = '#333333' // Examples menu
            }, 20)
        
            //In case the first one fails
            setTimeout(function(){
                document.getElementsByClassName('scene_content flex_column')[0].style.backgroundColor = '#1e1e1e'//Examples menu
                document.getElementsByClassName('scene_header')[0].style.backgroundColor = '#333333' // Examples menu
            }, 100)
        })
        
        HideThese = document.getElementsByClassName('bar_divider')
        for (i = 0; i < HideThese.length; i++) {
            HideThese[i].style.display = 'none'
        }
        
        document.getElementsByClassName('toolboxcollapse')[0].addEventListener('click', function() {
            setTimeout(() => {
                try {
                    document.getElementsByClassName('command_list')[0].style.backgroundColor = '#252526'
                    ElementsToMakeWhite = document.getElementsByTagName('p')
                    for (i = 0; i < ElementsToMakeWhite.length; i++) {ElementsToMakeWhite[i].style.color = '#ffffff'}
                } catch (e){}
            }, 10)
        });
        
        try {
            document.getElementsByClassName('command_list')[0].style.backgroundColor = '#252526'
            ElementsToMakeWhite = document.getElementsByTagName('p')
            for (i = 0; i < ElementsToMakeWhite.length; i++) {ElementsToMakeWhite[i].style.color = '#ffffff'}
        } catch (e){}
    }
})


//Disable ctrl-s
document.onkeydown = function(e) {
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
    }
}