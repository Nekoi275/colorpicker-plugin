
## Colorpicker plugin

### `new ColorPicker(canvasElement, colorFunction)`

<table>
    <thead>
        <tr>
            <th>Parameter name</th>
            <th>Default value</th>
            <th>Values range</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>canvasElement</td>
            <td>undefined</td>
            <td>HTML canvas element</td>
            <td>A canvas element to be used as colorpicker</td>
        </tr>
        <tr>
            <td>colorFunction</td>
            <td>undefined</td>
            <td>function</td>
            <td>A function, which will be called on click on colorpicker. It accepts the selected color's code as a string of color's rgb channels (e.g: '255, 255, 255')
            and specifies how to use the selected color</td>
        </tr>
    </tbody>
</table>

### `ColorPicker.buildColorPalette()`
A public function, which needs to be called to fill the canvas element with colorpicker gradient.
