Здесь AppVeor<br>
Здесь ссылка

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

