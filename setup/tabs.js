function showtab(tabID)
{
    var cur = 1;
    var valid = true;

    while(valid)
    {
        var tab = document.getElementById('tab' + cur);
        var open = document.getElementById('open' + cur);

        if(tab == null || tab == undefined)
        {
            valid = false;
        }
        else
        {
            tab.classList = "tabcontent tabclosed";
        }

        if(open == null || open == undefined)
        {
            valid = false;
        }
        else
        {
            open.classList = "tab";
        }

        cur += 1;
    }

    document.getElementById('tab' + tabID).classList = "tabcontent";
    document.getElementById('open' + tabID).classList = "tab open";
}