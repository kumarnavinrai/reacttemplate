<View>
        <SearchBar
          icon={{ type: 'feather', name: 'search' }}
          clearIcon={{ type: 'feather', name: 'x' }}
          onChangeText={(search) => {
            if(search === ''){
              this.setState({events:this.props.conference.events});
            } else {
              this.setState({events:this.props.conference.events.filter(item => {
                return JSON.stringify(item.data).toLowerCase().indexOf(search.toLowerCase()) > -1
              })});
            }
          }}
          placeholder='Search ...' 
          cancelButtonTitle="Cancel"/>
        <SectionList
          renderItem={({ item, index, section }) => <ListItem containerStyle={{borderLeftColor: item.color, borderLeftWidth: 6}} key={index} title={item.name} subtitle={item.time + ' ' + item.place} onPress={()=>this.setState({event: item, modal: true})}/>}
          renderSectionHeader={({ section: { title } }) => <ListItem title={title}
                  containerStyle={{backgroundColor: config.SCHEDULE_HEADER_COLOR}}
                  titleStyle={{ color:config.PRIMARY_BG_COLOR, fontWeight: '800'}}
                  chevronColor={config.SCHEDULE_HEADER_COLOR}
                  stickySectionHeadersEnabled={true}
          />}
          sections={this.state.events || []}
          keyExtractor={(item, index) => item + index} />

          {
            <Modal isVisible={this.state.modal}
            onSwipe={() => this.setState({ modal: false })}
            onBackdropPress={() => this.setState({ modal: false })}>
              <Card title={(this.state.event.name||'').toUpperCase()}>
                <View>
                  <Text style={{fontWeight:'700'}}>{this.state.event.time} {this.state.event.place}</Text>
                  <Text style={{textAlign: 'justify', marginTop: 10}}>{this.state.event.description}</Text>
                  {
                    this.state.event.speaker?
                      <View style={{flexDirection:'row', marginTop: 10}}>
                        <Text style={{fontWeight:'700'}}>Speaker: </Text>
                        <Text>{this.state.event.speaker}</Text>
                      </View>:null
                  }
                  <Button
                    title='CLOSE'
                    buttonStyle={{
                      backgroundColor: config.PRIMARY_BG_COLOR,
                      marginTop: 15
                    }}
                    onPress={()=>this.setState({modal: false})}
                  />
                </View>
              </Card>
            </Modal>
          }
      </View>

              
  <View style={styles.container}>
          
          <View style={styles.info}>
            <Icon.Button name="calendar" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{this.props.conference.date}</Text>
            </Icon.Button>
            <Icon.Button name="map-pin" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{(this.props.conference.location||{}).city}</Text>
            </Icon.Button>
          </View>
          <Text style={styles.description}>{this.props.conference.description}</Text>
          <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here'/>
          <View style={styles.author}>
            <Image
              source={{uri: 'https://avatars3.githubusercontent.com/u/17863319?s=460&v=4'}}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>App Developer Info:</Text>
              <Text>Lex Martinez</Text>
              <Text style={styles.link}>me@lexmartinez.com</Text>
            </View>
          </View>
        </View>


         <ScrollView>
        <Image
          source={{uri: this.props.conference.banner}}
          style={styles.banner}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Login-{this.props.conference.name}</Text>
          <View style={styles.info}>
            <Icon.Button name="calendar" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{this.props.conference.date}</Text>
            </Icon.Button>
            <Icon.Button name="map-pin" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{(this.props.conference.location||{}).city}</Text>
            </Icon.Button>
          </View>
          <Text style={styles.description}>{this.props.conference.description}</Text>
          <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here'/>
          <View style={styles.author}>
            <Image
              source={{uri: 'https://avatars3.githubusercontent.com/u/17863319?s=460&v=4'}}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>App Developer Info:</Text>
              <Text>Lex Martinez</Text>
              <Text style={styles.link}>me@lexmartinez.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>