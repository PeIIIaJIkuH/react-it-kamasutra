import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	};

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({status: e.target.value});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
			<div className={s.status}>
				{!this.state.editMode &&
				<div className={s.statusText} onClick={this.activateEditMode}>{this.props.status || '----'}</div>
				}
				{this.state.editMode &&
				<div className={s.statusInput}>
					<input type='text' value={this.state.status} onBlur={this.deactivateEditMode} autoFocus
					       onChange={this.onStatusChange}/>
				</div>
				}
			</div>
		);
	}
}

export default ProfileStatus;