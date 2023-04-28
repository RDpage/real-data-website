window.onload = function() {
    var bannerLeft = 0;
    var  first = 1;
    var last;
    var imgCut = 0;
    var $img = $(".banner_wraper img");
    var $first;
    var $last;

    $img.each(function() {
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width()+5;
        $(this).attr("id", "banner" + (++imgCut)); //img id 속성 추가
    });


    if(imgCut > 9) { // 배너 9개 이상이면 이동시킴
        last = imgCut;
        setInterval(function() {
            $img.each(function() {
                $(this).css("left", $(this).position().left-2); //2px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -100) { // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width() + 5);
                first++;
                last++
                if(last > imgCut) {last = 1;}
                if(first > imgCut) {first = 1;}
            }
        }, 100); // 여기 값을 조정하면 속도를 조정할 수 있음. (위 1px 이동하는 부분도 조정하면 깔끔하게 변경 가능.)
    }
}
