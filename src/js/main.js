
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});



$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// $('.wrap').html(
//     ` <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//         <a href="#" class="dropdown-item">Action</a>
//         <a href="#" class="dropdown-item">Action #2</a>
//         <a href="#" class="dropdown-item">Action #3</a>
//     </div>
// </div>`
// )

$('.dropdown-toggle').dropdown();

$('[data-count="second"]').on('click', () => {
    console.log($('div').siblings());
});

$('#trigger').click(() => $('#trigger').createModal ({
    text: {
        title: 'Modal title',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore praesentium quo rem? Culpa sed alias quas ut, quibusdam saepe porro illum! Reprehenderit ipsum accusamus at atque commodi nulla soluta?
        Quaerat soluta, illum ea impedit, dolore explicabo debitis eligendi minus corrupti aliquid tenetur perspiciatis exercitationem. Deleniti, fugiat non repellendus est sunt possimus officia minima incidunt repudiandae neque adipisci nostrum facilis?`
    },
    btns: {
        count: 2,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ]
        ]
    }
}))