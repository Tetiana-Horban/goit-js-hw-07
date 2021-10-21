task-01

Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в
модальном окне. Посмотри демо видео работы галереи.

gallery-demo.mp4 Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на
несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента
галереи. Реализация делегирования на div.gallery и получение url большого изображения. Подключение
скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в
проект ссылки на минифицированные (.min) файлы библиотеки. Открытие модального окна по клику на
элементе галереи. Для этого ознакомься с документацией и примерами. Замена значения атрибута src
элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с
изображением из примеров библиотеки basicLightbox. Разметка элемента галереи Ссылка на оригинальное
изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки.
Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

Закрытие с клавиатуры ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание
клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для
программного закрытия модального окна.

task-02

Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая
возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также
пролистывание изображений при помощи клавиатуры.

Посмотри демо видео работы галереи с подключенной библиотекой.

simplelightbox-demo.mp4 Необходимо немного изменить разметку карточки галереи, используй этот
шаблон.

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента
галереи. Используй готовый код из первого задания. Подключение скрипта и стилей библиотеки используя
CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и
simple-lightbox.min.css. Инициализация библиотеки после того как элементы галереи созданы и
добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь
секции «Usage» и «Markup». Посмотри в документации секцию «Options» и добавь отображение подписей к
изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после
открытия изображения.
