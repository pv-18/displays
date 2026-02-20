<script>
        function toggleSubmenu(id) {
            const menu = document.getElementById(id);
            const allMenus = document.querySelectorAll('.sub-menu');
            
            allMenus.forEach(m => {
                if (m.id !== id) {
                    m.classList.remove('active');
                }
            });
            
            menu.classList.toggle('active');
        }

        document.addEventListener('click', function(e) {
            const menu = document.querySelector('.sub-menu.active');
            if (menu && !menu.contains(e.target) && !e.target.closest('.button')) {
                menu.classList.remove('active');
            }
        });
    </script>
