import React, { useState } from 'react'
import ItemActions from '../../tools/item-actions/ItemActions'
import Switch from '../../react-components/table-cols/Switch'
import Text from '../../react-components/table-cols/Text'
import Chips from '../../react-components/table-cols/Chips'

export default props => {
	const [banWord, setBanWord] = useState(props.banWord)
	const [focusedCol, setFocusedCol] = useState('')
	
	const itemActions = new ItemActions('mod-ban-words', 'Ban word', setBanWord, setFocusedCol, ['text'])
	
	return (
		<tr className={banWord.active ? '' : 'grey-text text-lighten-1'}>
			<Switch
				disabled={!banWord.id}
				defaultChecked={banWord.active}
				onChange={e => itemActions.setVal('active', e.target.checked)}
			/>
			<Text
				value={banWord.text}
				placeholder="*enter text*"
				long={true}
				hasFocus={focusedCol === 'text'}
				onFocus={() => setFocusedCol('text')}
				onBlur={e => itemActions.setVal('text', e.target.value)}
			/>
			<Chips
				active={banWord.active}
				items={banWord.channels}
				hasFocus={focusedCol === 'channels'}
				onFocus={() => setFocusedCol('channels')}
				onBlur={users => itemActions.setVal('channels', users)}
			/>
			<td className="table-item-delete item-delete">
				<i className="material-icons red-text" onClick={() => props.onRemove(banWord)}>delete</i>
			</td>
		</tr>
	)
}