$(function () {
    // 显示
    $('#hangye').click(function () {
        $('#hangye_img').attr('src','../../img/向下.png')
        $('.hangye').css({
            'display':'block',
        })
        $('.bg').css({
            'display':'block',
        })
    })

    $('#city').click(function () {
        $('#city_img').attr('src','../../img/向下.png')
        $('.city').css({
            'display':'block',
        })
        $('.bg').css({
            'display':'block',
        })
    })

    // 隐藏
    $('.close').click(function () {
        $('#hangye_img').attr('src','../../img/向下%20(1).png')
        $('.hangye').css({
            'display':'none',
        })
        $('.bg').css({
            'display':'none',
        })
    })
    $('.close1').click(function () {
        $('#city_img').attr('src','../../img/向下%20(1).png')
        $('.city').css({
            'display':'none',
        })
        $('.bg').css({
            'display':'none',
        })
    })
    // 获取值行业值
    $('.hangye>ul>li').click(function (a) {
        $('#hangye').val(a.target.innerText)
        // console.log(a.target.innerText)
        $('#hangye_img').attr('src','../../img/向下%20(1).png')
        $('.hangye').css({
            'display':'none',
        })
        $('.bg').css({
            'display':'none',
        })
    })
    // 获取城市省
    $.ajax({
        url:'http://106.13.184.147:700/api/action_api/citys.html?nsukey=PhozwUk9RjK6vCvtAoMWq5uE2ENw7W9J0z26qDgRdGVHgh3Iv7EbEiQRsKy2FcY47%2B3mHnSC%2BdkSvFY6n59MzmS3F6i717qiIfOmnH9nKX6VrmQ7jshO8GNfqZhN9ozwaKvncX3ik27MLqWa6FuwmS8DnywhFj%2BFw%2F7JzMpcpyrB1VGugknwYtkvkuvq6kdG9nLQvYZsQu5hfhUABwK78Q%3D%3D',
        method:'get',
        success: function (data) {
            // console.log(data)
            var str = ''
            $.each(data,function (i, v) {
                // console.log(i+'---'+v.name+'---'+v.id)
                str += '<li id="'+v.id+'">'+v.name+'</li>'
            })
            $('.citys_p3').append(str)
            $('.citys_p3 li').click(function () {
                $('#p').removeClass('active')
                var val = $(this)[0].innerText
                $('#p').text(val)
                $('#c').addClass('active')
                // 获取城市区
                $.ajax({
                    url:'http://106.13.184.147:700/api/action_api/county.html?cityid='+$(this).attr('id'),
                    method:'get',
                    success: function (data) {
                        // console.log(data.data)
                        var str1 = ''
                        $.each(data.data,function (i, v) {
                            // console.log(v.name)
                            str1 += '<li id="'+v.id+'">'+v.name+'</li>'
                        })
                        $('.citys_p3').empty()
                        $('.citys_p3').append(str1)
                        $('.citys_p3 li').click(function () {
                            $('#p').removeClass('active')
                            $('#c').removeClass('active')
                            var val = $(this)[0].innerText
                            $('#c').text(val)
                            $('#q').addClass('active')
                            var shi = $('#p')[0].innerText
                            var qu = $('#c').html()
                            // console.log($('#p')[0].innerText)
                            // console.log($('#c').html())
                            var citys = shi +'/'+qu
                            $('#city').val(citys)
                            // console.log(citys)
                            // console.log($('#city').val(citys));
                            $('#city_img').attr('src','../../img/向下%20(1).png')
                            $('.city').css({
                                'display':'none',
                            })
                            $('.bg').css({
                                'display':'none',
                            })
                        })
                    }
                })
            })
            $('#p').click(function () {
                // console.log('显示县区')
                $.ajax({
                    url: 'http://106.13.184.147:700/api/action_api/citys.html?nsukey=PhozwUk9RjK6vCvtAoMWq5uE2ENw7W9J0z26qDgRdGVHgh3Iv7EbEiQRsKy2FcY47%2B3mHnSC%2BdkSvFY6n59MzmS3F6i717qiIfOmnH9nKX6VrmQ7jshO8GNfqZhN9ozwaKvncX3ik27MLqWa6FuwmS8DnywhFj%2BFw%2F7JzMpcpyrB1VGugknwYtkvkuvq6kdG9nLQvYZsQu5hfhUABwK78Q%3D%3D',
                    method: 'get',
                    success: function (data) {
                        // console.log(data)
                        $('.citys_p3').empty()
                        var str = ''
                        $.each(data,function (i, v) {
                            // console.log(i+'---'+v.name+'---'+v.id)
                            str += '<li id="'+v.id+'">'+v.name+'</li>'
                        })
                        $('.citys_p3').append(str)
                        $('.citys_p3 li').click(function () {
                            $('#p').removeClass('active')
                            $('#q').removeClass('active')
                            var val = $(this)[0].innerText
                            $('#p').text(val)
                            $('#c').addClass('active')

                            // var index = $(".citys_p3 li").index(this);
                            // alert(index);
                            // console.log($(this)[0]);

                            // console.log($(this).attr('id'));
                            // 获取城市区
                            $.ajax({
                                url: 'http://106.13.184.147:700/api/action_api/county.html?cityid=' + $(this).attr('id'),
                                method: 'get',
                                success: function (data) {
                                    // console.log(data.data)
                                    var str1 = ''
                                    $.each(data.data, function (i, v) {
                                        // console.log(v.name)
                                        str1 += '<li id="' + v.id + '">' + v.name + '</li>'
                                    })
                                    $('.citys_p3').empty()
                                    $('.citys_p3').append(str1)
                                    $('.citys_p3 li').click(function () {
                                        $('#p').removeClass('active')
                                        $('#c').removeClass('active')
                                        var val = $(this)[0].innerText
                                        $('#c').text(val)
                                        $('#q').addClass('active')
                                        var shi = $('#p')[0].innerText
                                        var qu = $('#c').html()
                                        // console.log($('#p')[0].innerText)
                                        // console.log($('#c').html())
                                        var citys = shi + '/' + qu
                                        $('#city').val(citys)
                                        // console.log(citys)
                                        // console.log($('#city').val(citys));
                                        $('#city_img').attr('src', '../../img/向下%20(1).png')
                                        $('.city').css({
                                            'display': 'none',
                                        })
                                        $('.bg').css({
                                            'display': 'none',
                                        })
                                    })
                                }
                            })
                        })
                    }
                })
            })
            // $('#c').click(function () {
            //     console.log('显示城市')
            // })
        }
    })
    // 顶部关闭
    $('.join_t').click(function () {
        // console.log('aaa')
        window.location.href = '../case/partner.html'
    })
})
