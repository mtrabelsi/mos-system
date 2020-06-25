import React from 'react';
import Layout from '../../components/Layout';
import { getDataById, IncidentType, updateData } from '../../data';

type MyState = IncidentType;
class EditItem extends React.Component<any, MyState> {
    constructor(props) {
        const { incidentId } = props.match.params;
        const item: IncidentType = getDataById(incidentId);

        super(props);
        this.state = item;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const state = this.state;
        switch (name) {
            case 'status[criticality]':
                state.status.criticality = value;
                break;
            case 'status[verified]':
                state.status.verified = parseInt(value) ? true : false;
                break;
            case 'status[position][from][latitude]':
                state.position.from.latitude = value;
                break;
            case 'status[position][from][longitude]':
                state.position.from.longitude = value;
                break;
            case 'status[position][to][latitude]':
                state.position.to.latitude = value;
                break;
            case 'status[position][to][longitude]':
                state.position.to.longitude = value;
                break;
            case 'status[interval][startTime]':
                state.interval.startTime = value;
                break;
            case 'status[interval][endTime]':
                state.interval.endTime = value;
                break;
            case 'status[interval][entryTime]':
                state.interval.entryTime = value;
                break;
            default:
                state[name] = value;
        }

        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        const updateStatus = updateData(this.state);
        if(updateStatus){
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        status criticality:
                            <input
                            name="status[criticality]"
                            type="text"
                            value={this.state.status.criticality}
                            onChange={this.handleChange} />

                    </label>
                    <br />
                    <label>
                        status verified:
                        <select value={this.state.status.verified ? 1 : 0} name="status[verified]" onChange={this.handleChange}>
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                        </select>
                    </label>
                    <br />

                    <label>
                        address:
                        <input
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        from latitude :
                        <input
                            name="status[position][from][latitude]"
                            type="number"
                            value={this.state.position.from.latitude}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        from longitude :
                        <input
                            name="status[position][from][longitude]"
                            type="number"
                            value={this.state.position.from.longitude}
                            onChange={this.handleChange} />
                    </label>
                    <br />

                    <label>
                        to latitude :
                        <input
                            name="status[position][to][latitude]"
                            type="number"
                            value={this.state.position.to.latitude}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        to longitude :
                        <input
                            name="status[position][to][longitude]"
                            type="number"
                            value={this.state.position.to.longitude}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        startTime :
                        <input
                            name="status[interval][startTime]"
                            type="text"
                            value={this.state.interval.startTime}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        endTime :
                        <input
                            name="status[interval][endTime]"
                            type="text"
                            value={this.state.interval.endTime}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        entryTime :
                        <input
                            name="status[interval][entryTime]"
                            type="text"
                            value={this.state.interval.entryTime}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        );
    }
}

export default EditItem;