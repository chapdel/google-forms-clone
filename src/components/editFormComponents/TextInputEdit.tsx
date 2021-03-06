import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { updateComponent } from '../../actions/form';
import '../../styles/components.scss';

interface Props {
  id: string;
  settings: {
    question: string;
    maxChars: number;
  },
  type: string;
  updateComponent: (id:string, update: { question?: string, maxChars?: number; }) => void;
}

class TextInputEdit extends Component<Props> {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleMaxCharsChange = this.handleMaxCharsChange.bind(this);
  }
  handleValueChange(e: React.ChangeEvent<{ value: string }>) {
    const { id, updateComponent } = this.props;
    const newValue = e.target.value;
    updateComponent(id, { question: newValue });
  }
  handleMaxCharsChange(e: React.ChangeEvent<{ value: string }>) {
    const { id, updateComponent } = this.props;
    const newValue = parseInt(e.target.value, 10);
    updateComponent(id, { maxChars: newValue });
  }
  render() {
    const { settings: { question, maxChars } } = this.props;
    return (
      <Paper className="edit-component-container">
        <div className="component-type">
          Text
        </div>
        <div className="settings">
          <FormControl className="value-field">
            <TextField
              label="Question"
              placeholder="Question"
              value={question}
              onChange={this.handleValueChange}
              margin="normal"
            />
          </FormControl>
          <FormControl className="value-field">
            <TextField
              label="Max Characters"
              placeholder="Max"
              value={maxChars}
              onChange={this.handleMaxCharsChange}
              margin="normal"
            />
          </FormControl>
        </div>
      </Paper>
    )
  }
}

export default connect(
  null,
  { updateComponent }
)(TextInputEdit);
