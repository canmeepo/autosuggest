
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TextField from 'material-ui/TextField';
import { List } from 'material-ui/List';

import '../assets/styles/SearchBar.styl';

export class SearchBar extends Component {
    state = { country: '', index: -1 };

    componentDidMount() {
        this.input.focus();
    }

    componentDidUpdate() {
        this.input.focus();
    }

    incrementState = prevState => {
        if (this.state.index < this.props.suggestions.length - 1) {
            return this.setState(prevState => {
                return { index: prevState.index + 1 };
            });
        }

        return this.setState(prevState => {
            return { index: 0 };
        });
    };

    decrementState = prevState => {
        if (this.state.index >= 1) {
            return this.setState(prevState => {
                return { index: prevState.index - 1 };
            });
        }

        return this.setState(prevState => {
            return { index: this.props.suggestions.length - 1 };
        });
    };

    clearCount = prevState => {
        this.setState(prevState => {
            return { index: -1 };
        });
    };

    saveCountry = e => {
        const { removeSuggestion } = this.props;
        removeSuggestion();
        this.setState({ country: e.target.id });
    };

    handleChange = e => {
        const { addSuggestion, removeSuggestion, clearCountry } = this.props;
        clearCountry();
        this.setState({ country: e.target.value });

        e.target.value.length > 0
            ? addSuggestion(e.target.value.replace(/[^\w]/g, '').toLowerCase())
            : removeSuggestion();
    };

    handleClick = () => {
        const { removeSuggestion } = this.props;
        const suggestions = document.getElementsByClassName('suggestions');
        this.setState({ country: '' });

        return suggestions.length ? removeSuggestion() : null;
    };

    handleKeyDown = async e => {
        if (document.getElementsByClassName('hover').length) {
            document
                .getElementsByClassName('hover')[0]
                .classList.remove('hover');
        }

        let selected = document.getElementsByClassName('selected');
        let suggestions = document.getElementsByClassName('suggestions');

        if (suggestions.length) {
            if (e.keyCode === 40) {
                await this.incrementState();

                if (!selected.length) {
                    suggestions[this.state.index].classList.add('selected');
                } else {
                    selected[0].classList.remove('selected');
                    suggestions[this.state.index].classList.add('selected');
                }
            } else if (e.keyCode === 38) {
                await this.decrementState();

                if (!selected.length) {
                    suggestions[suggestions.length - 1].classList.add(
                        'selected'
                    );
                } else {
                    selected[0].classList.remove('selected');
                    suggestions[this.state.index].classList.add('selected');
                }
            } else if (e.keyCode === 13) {
                if (this.state.index === -1) {
                    return;
                }
                const { removeSuggestion } = this.props;
                removeSuggestion();
                this.setState({ country: suggestions[this.state.index].id });
                this.clearCount();
            } else {
                const { removeSuggestion } = this.props;
                removeSuggestion();
                this.clearCount();
            }
        }
    };

    highligth = e => {
        if (document.getElementsByClassName('selected').length) {
            document
                .getElementsByClassName('selected')[0]
                .classList.remove('selected');
            this.clearCount();
        }
        const suggestion = document.getElementById(e.target.id);
        suggestion.classList.add('hover');
    };

    removeHighlight = e => {
        const suggestion = document.getElementById(e.target.id);
        return suggestion.classList.contains('hover')
            ? suggestion.classList.remove('hover')
            : null;
    };

    displaySuggestions = () => {
        return this.props.suggestions.map(sugg => {
            return (
                <div
                    key={sugg.name}
                    className="suggestions"
                    id={sugg.name}
                    onClick={this.saveCountry}
                    onMouseEnter={this.highligth}
                    onMouseLeave={this.removeHighlight}
                >
                    {sugg.name}
                </div>
            );
        });
    };

    render() {
        return (
            <div className="SearchBar">
                <TextField
                    id="TextField"
                    ref={input => (this.input = input)}
                    name="choose a country"
                    floatingLabelText="choose a country"
                    value={this.state.country}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                {this.props.suggestions && (
                    <List id="List">{this.displaySuggestions()}</List>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ suggestions }) => {
    return { suggestions };
};

export default connect(mapStateToProps, actions)(SearchBar);
