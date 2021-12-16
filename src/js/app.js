$(() => {
    if($('#navbarList').length > 0 && $('#navbar .navbar-toggler').length > 0) {
        // navbar にメニューとハンバーガーアイコンが存在する場合
        const $navbarList = $('#navbarList');
        const $navbarToggler = $('#navbar .navbar-toggler');
        $navbarList.on('show.bs.collapse', function () {
            // 展開時のデフォルトの挙動を潰して Collapse の結果のクラスの付与・削除のみ実施
//            e.preventDefault();
//            e.stopPropagation();
            $navbarToggler.removeClass('collapsed');
            $navbarToggler.addClass('active');
            $navbarList.addClass('show');
            return false;
        })
        $navbarList.on('hide.bs.collapse', function () {
            // 格納時のデフォルトの挙動を潰して Collapse の結果のクラスの付与・削除のみ実施
//            e.preventDefault();
//            e.stopPropagation();
            $navbarToggler.addClass('collapsed');
            $navbarToggler.removeClass('active');
            $navbarList.removeClass('show');
            return false;
        });
    }
});
