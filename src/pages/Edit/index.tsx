import React from 'react';
import Layout from '../../components/Layout';
import InputText from '../../components/InputText';
import { getDataById, updateData } from '../../api';
import { IncidentType } from '../../api/types'
import { Label, LabelText } from '../../components/InputText/atoms';
import Button from '../../components/Button';
import { ControlButtons } from '../../components/Button/atoms';

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
        const { history } = this.props

        return (
            <Layout 
                showBackButton 
                history={history}
                title="Edit Incident"
                topBarStyle={{ 
                    alignItems: 'center'
                }}
            >
                
                <form onSubmit={this.handleSubmit}>
                    <Label>
                        <LabelText>status criticality:</LabelText>
                            <InputText
                            name="status[criticality]"
                            type="text"
                            value={this.state.status.criticality}
                            onChange={this.handleChange} />

                    </Label>
                    <br />
                    <Label>
                        <LabelText>status verified:</LabelText>
                        <select value={this.state.status.verified ? 1 : 0} name="status[verified]" onChange={this.handleChange}>
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                        </select>
                    </Label>
                    <br />

                    <Label>
                        <LabelText>address:</LabelText>
                        <InputText
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <Label>
                        <LabelText>from latitude :</LabelText>
                        <InputText
                            name="status[position][from][latitude]"
                            type="number"
                            value={this.state.position.from.latitude}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <Label>
                        <LabelText>from longitude :</LabelText>
                        <InputText
                            name="status[position][from][longitude]"
                            type="number"
                            value={this.state.position.from.longitude}
                            onChange={this.handleChange} />
                    </Label>
                    <br />

                    <Label>
                        <LabelText>to latitude :</LabelText>
                        <InputText
                            name="status[position][to][latitude]"
                            type="number"
                            value={this.state.position.to.latitude}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <Label>
                        <LabelText>to longitude :</LabelText>
                        <InputText
                            name="status[position][to][longitude]"
                            type="number"
                            value={this.state.position.to.longitude}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <Label>
                        <LabelText>startTime :</LabelText>
                        <InputText
                            name="status[interval][startTime]"
                            type="text"
                            value={this.state.interval.startTime}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <Label>
                        <LabelText>endTime :</LabelText>
                        <InputText
                            name="status[interval][endTime]"
                            type="text"
                            value={this.state.interval.endTime}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <Label>
                        <LabelText>entryTime :</LabelText>
                        <InputText
                            name="status[interval][entryTime]"
                            type="text"
                            value={this.state.interval.entryTime}
                            onChange={this.handleChange} />
                    </Label>
                    <br />
                    <ControlButtons>
                        <Button
                            customMargin="5px 0"
                            customWidth="280px"
                            successMode
                            hasIconLeft={false}
                            onClick={e => history.goBack()}
                            value="Submit" 
                        />
                        <Button
                            customMargin="5px 0"
                            customWidth="280px"
                            isDanger
                            hasIconLeft={false}
                            onClick={e => history.goBack()}
                            value="Reset" 
                        />
                    </ControlButtons>
                </form>
            </Layout>
        );
    }
}

export default EditItem;