import { v, w } from '@dojo/widget-core/d';
import WidgetBase from '@dojo/widget-core/WidgetBase';
import widgetify from '@dojo/widget-core/util/widgetify';
import * as Button from 'dijit/form/Button';

export default class App extends WidgetBase {
	render() {
		return v('div', [
			w(widgetify(Button), {
				id: 'foo',
				label: 'Click me!',
				onClick() {
					console.log('I was clicked');
					return true;
				}
			})
		]);
	}
}
