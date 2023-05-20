<template>
<div class="pb-16">
    <p class="font-normal text-2xl mt-5 ml-10">Посты</p>

    <p class="py-3 px-6 bg-[purple] w-max text-white rounded-xl ml-3 md:ml-10 mt-10 cursor-pointer">Создать новый пост</p>

    <!-- table posts -->
<!-- <div class="ml-10 mt-10 flex">
    <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
                <table class="divide-y divide-gray-300 ">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                No
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Title
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Edit
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Ketika Anjime Biklek Pov
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Warga Kota Anjime Menjadi Konteks
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Gwej Raja Satir
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div> -->
    
    <div class="mx-3 md:mx-0 md:ml-10 mt-10">
    <table class="border border-[#FF66A1]">
        <thead class="bg-[darkcyan]">
            <tr>
                <!--<th class="px-2 md:px-5 py-3 text-white font-medium border-r">No</th>-->
                <th class="px-5 py-3 text-white font-medium md:w-[180px] lg:w-[200px] xl:w-[300px] border-r">Название</th>
                <th class="px-5 py-3 text-white font-medium border-r md:w-[200px] xl:w-[270px]">Теги</th>
                <th class="px-5 py-3 text-white font-medium">Отрывок поста</th>
                <th class="px-5 py-3 text-white font-medium md:w-[180px] lg:w-[200px] xl:w-[300px] border-r">Дата публикации</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-[#FF66A1]">
                <!--<td class="py-4 text-center border-r">1</td>-->
                <td class="pl-3 border-r"> 
                    <img src="/asset/1.jpeg" class="w-[150px] h-[110px] rounded-xl object-cover object-center" alt="">
                    Изучение дизайна</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[lightseagreen] rounded-full text-white w-max mt-2 mr-2 text-xs">Сочетание цветов</p>
                    <p class="py-2 px-4 bg-[lightseagreen] rounded-full text-white w-max mt-2 mr-2 text-xs">Поверхности</p>
                    <p class="py-2 px-4 bg-[lightseagreen] rounded-full text-white w-max mt-2 mr-2 text-xs">Много идей</p>
                    <p class="py-2 px-4 bg-[lightseagreen] rounded-full text-white w-max mt-2 mr-2 text-xs">Формы</p>
                    <p class="py-2 px-4 bg-[lightseagreen] rounded-full text-white w-max mt-2 mr-2 text-xs">Вдохновение</p>
                </td>
                <td class="px-3">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-xl bg-[lavender]"><a href="">На изучение дизайна я долгое время не решалась...., все изменилось в один момент.....</a>
                        <p class="font-normal text-sm text-[darkcyan] mr-3"> <router-link to="/post1">Читать далее</router-link></p></p>
                    <!--<p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Удалить</a></p>-->
                </td>
                <td class="px-3">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-xl bg-[cyan]"><a href="">20/01/22</a></p>
                    <!--<p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Удалить</a></p>-->
                </td>
            </tr>
            <tr class="border-b border-[#FF66A1]">
                <!--<td class="py-4 text-center border-r">2</td>-->
                <td class="pl-3 border-r">
                    <img src="/asset/2.png" class="w-[150px] h-[110px] rounded-xl object-cover object-center" alt="">
                    Прочитала новую книгу</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[lightpink] rounded-full text-white w-max mt-2 mr-2 text-xs">Захватывающая история</p>
                    <p class="py-2 px-4 bg-[lightpink] rounded-full text-white w-max mt-2 mr-2 text-xs">Люблю читать</p>
                    <p class="py-2 px-4 bg-[lightpink] rounded-full text-white w-max mt-2 mr-2 text-xs">Приятнвй вечер</p>
                    <p class="py-2 px-4 bg-[lightpink] rounded-full text-white w-max mt-2 mr-2 text-xs">Фэнтези</p>
                    <p class="py-2 px-4 bg-[lightpink] rounded-full text-white w-max mt-2 mr-2 text-xs">Новая книга любимого автора</p>
                </td>
                <td class="px-3">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-xl bg-[lavender]"><a href="">Наконец вышла долгожданная книга. История в жанре научной фантастики....</a>
                        <p class="font-normal text-sm text-[darkcyan] mr-3"> <router-link to="/post2">Читать далее</router-link></p></p>
                    <!--<p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Удалить</a></p>-->
                </td>
                <td class="px-3">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-xl bg-[cyan]"><a href="">25/01/22</a></p>
                    <!--<p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Удалить</a></p>-->
                </td>
            </tr>
            <!--<tr class="border-b border-[#FF66A1]">
                <td class="py-4 text-center border-r">3</td>
                <td class="pl-3 border-r">Чтение</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">"Записки из мертвого дома" Ф.М.Достоевский</p>
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">"Голод" Гнут Гамсун</p>
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">"Чума" Альбер Камю</p>
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">"Тошнота" Жан Поль Сартр</p>
                </td>
                <td class="px-3 text-center">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-[#a3d164] md:inline md:mr-3"><a href="">Добавить</a></p>
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Удалить</a></p>
                </td>
            </tr>
            <tr class="border-b border-[#FF66A1]">
                <td class="py-4 text-center border-r">4</td>
                <td class="pl-3 border-r">Игры</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">Mortal Kombat 11</p>
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">Star Wars Jedi: Fallen Order</p>
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">Detroit: Become Human</p>
                    <p class="py-2 px-4 bg-[#FF66A1] rounded-full text-white w-max mt-2 mr-2 text-xs">Ведьмак 3: Дикая охота</p>
                </td>
                <td class="px-3 text-center">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-[#a3d164] md:inline md:mr-3"><a href="">Добавить</a></p>
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Удалить</a></p>
                </td>
            </tr>-->
        </tbody>
    </table>
    </div>
    <!-- end table posts -->

</div>
</template>

<script>
export default {

}
</script>