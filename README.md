[![Build status](https://ci.appveyor.com/api/projects/status/5j0wenmkdiw7iahp?svg=true)](https://ci.appveyor.com/project/Al101020/13-2-06)
<br>
Здесь ссылка: https://al101020.github.io/13-2.06/

<br>

# Drag and drop. Files

1. Созждал репозиторий 13-2.06 на GitHub
2. Setting => pages => GitHub Action => create your own. 
   => ввожу имя файла web.yml и делаю коммит.
3. Клонирую себе на ПК.
4. Устанавливаем завасимости командой: yarn
	ошибка: ... Error: error:0308010C:digital envelope routines::unsupported ...
5. Удаляем файл yarn.lock и папку node_modules, и снова устанавливаем завасимости командой: yarn
6. В файл webpack.config.js добавил:
... devServer: {
    open: 'chrome',
    port: 9000,
  },
  devtool: 'source-map', ...
7. Команда 'yarn start' открывает Хром на 9000 порту
8. На сайте https://ci.appveyor.com/ добавил новый проект и выбрал созданый репозиторий на GitHub.
9. В Setting в проекте на сайте https://ci.appveyor.com/ => выбираю Badges => в Sample markdown code копирую себе код бэйджика
10. Добавил бэйджик и ссылку в файл READMY.md
-------
git status
git add -A
git commit -m "commit-2"
git push
-------
12. Добавил в проект переменную Setting => Environment(окружающая среда) 
	=> Add variable(добавить переменную) =>
	GITHUB_TOKEN : тут токен
13. Добавил ссылку и бэйджик.
-------
git status
git add -A
git commit -m "commit-3"
git push
-------
14. input:
	- радио-кнопка
	- перетаскивающаяся штуковина
	- то он поле ввода с которого можно перетаскивать файлы(сказано было в видеоуроке)
15. В файле .appveyor.yml поменял версию node.js на 20.
-------
git status
git add -A
git commit -m "commit-4 .appveyor.yml изменил node.js на 20"
git push
-------
- ошибка
16. Удалил yarn.lock, package-lock.json и папку node_modules.
	Команда: yarn - установка зависимостей.
-------
git status
git add -A
git commit -m "commit-5 в .appveyor.yml изм. stack: node 18"
git push
-------
- ошибка, просит какойто аудит.

=================================================================================================
	WebPack(проект) - скопировал проект 13-2.05 без файла READMY.md(бэйджик и ссылка) и папки SRC
-------
git status
git add -A
git commit -m "commit-7"
git push
-------
	в файле .appveyor.yml меняем строку: stack: node 20  # окружение
	в файле C:\_GitHub_\13-2.06\.github\workflows\web.yml меняем версию node три раза:
		node-version: 20.18.1
-------
git status
git add -A
git commit -m "commit-8"
git push
-------
	на AppVeyor сборка не прошла - бэйджик красный
	удалил yarn.lock
	на AppVeyor сборка прошла - бэйджик зелёный, но много предупреждений.
	Провёл установку зависимостей:
		yarn 
-------
git status
git add -A
git commit -m "commit-10"
git push
-------
	сборка прошда успешно, приступаем к уроку лекции
=================================================================================================
