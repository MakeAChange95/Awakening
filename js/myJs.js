<script>
    $('.header li').on('click', function() {
        $('li.clicked').removeClass('clicked');
        $(this).addClass('clicked');
    });
    </script>
    <script>
    $("#datepicker").datepicker();
    </script>