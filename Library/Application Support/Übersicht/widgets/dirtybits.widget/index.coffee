# this is the shell command that gets executed every time this widget refreshes
command: "curl -s https://dirtybits.fork.de/locusfocus/service/?action=GetCurrent&format=json"

# the refresh frequency in milliseconds
refreshFrequency: 5000

render: (o) ->
  @count = 0
  """
    <div class='box'>
    </div>
  """

update: (output, domEl) ->
  box = $(domEl).find('.box')
  try 
    data = JSON.parse(output)
    statusMEG = data['result']['data'][0]['free']
    statusFEG = data['result']['data'][1]['free']
    statusMOG = data['result']['data'][2]['free']
    statusFOG = data['result']['data'][3]['free']

    if(statusMEG)
      statusMEG = 'free'
    else
      statusMEG = 'occupied'

    if(statusFEG)
      statusFEG = 'free'
    else
      statusFEG = 'occupied'

    if(statusMOG)
      statusMOG = 'free'
    else
      statusMOG = 'occupied'

    if(statusFOG)
      statusFOG = 'free'
    else
      statusFOG = 'occupied'

    content = """
    <div class='box'>
      <div class='col'>
          <div class='row'>
              <div class='state state--fog'> <i class='state--#{statusFOG} fas fa-female'></i></div>
              <div class='state state--mog'> <i class='state--#{statusMOG} fas fa-male'></i></div>
          </div>
          <div class='row'>
              <div class='state state--meg'> <i class='state--#{statusMEG} fas fa-male'></i></div>
              <div class='state state--feg'> <i class='state--#{statusFEG} fas fa-female'></i></div>
          </div>
      </div>
    </div>
    """

    $(box).replaceWith content
  catch error
   console.log("error with json")

  

style: """
  bottom: 5px
  right: 150px
  color: white
  font-family: 'Helvetica Neue'
  font-weight: 200
  letter-spacing: 1px
  text-align: center
  //background: rgba(255, 255, 255, 0.1)
  min-width: 100px
  border-radius: 10px

  .box
    font-size: 20px
    padding:2px

    .col
      padding-left: 15px

    .row
      padding-top: 2px

    .state
      width: 30px
      height: 20px
      padding-top: 2px
      padding-bottom: 5px

    .state--occupied
      color: rgb(213,68,73)	

    .state--fog, .state--meg
      float: left

    .state--feg, .state--mog
      float: left

    .state--fog
      //border-right: 1px solid
      border-bottom: 1px solid

    .state--mog
      border-bottom: 1px solid

    .state--meg
      //border-right: 1px solid

    .top
      text-align: left

    .sub
      text-align: right
      margin-bottom: 2px

    .sub, .top
      font-size: 11px
      font-weight: 500
      letter-spacing: 1px
"""