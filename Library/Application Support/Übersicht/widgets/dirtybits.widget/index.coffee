# this is the shell command that gets executed every time this widget refreshes
command: "curl -s https://dirtybits.fork.de/locusfocus/service/?action=GetCurrent&format=json"

# the refresh frequency in milliseconds
refreshFrequency: 5000

render: (o) ->
  @count = 0
  """
    <div class='box'>
      <div class='top'>WC <i class="fas fa-mars"></i></div>
      <div class='status'>
      </div>
    </div>
  """

update: (output, domEl) ->
  box = $(domEl).find('.box')
  data = JSON.parse(output)

  status = data['result']['data'][2]['free']
  stateclass = "status--"+status


  $(domEl).find('.box').removeClass('status--false')
  $(domEl).find('.box').removeClass('status--true')
  $(domEl).find('.box').addClass(stateclass)
  if(status)
    status = 'free'
  else
    status = 'occupied'
  content = """
    <div class='status #{stateclass}'> #{status}</div>
    <div class='sub'>OG</div>
  """

  $(box).find('.status').html content

style: """
  bottom: 0%
  right: 140px
  width: 220px
  color: white
  font-family: 'Helvetica Neue'
  font-weight: 100
  text-align: left
  margin: -50px 0 0
  text-align: center
  //background: rgba(255, 255, 255, 0.1)
  //background: rgba(0, 0, 0, 0.3)
  min-width: 130px
  -webkit-font-smoothing: antialiased;
  @keyframes attention {
        from {
          background: rgba(red,0.1)
          -webkit-backdrop-filter: blur(5px) brightness(2%) contrast(5%) saturate(5%)
        }
        to {
    background: rgba(red,0.8)
          -webkit-backdrop-filter: blur(5px) brightness(50%) contrast(20%) saturate(5%)
        }
      }
  .box.status--false

    background: rgba(red,0.5)
    animation-name: attention;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;

  .box
    //border: 1px solid #FFF
    border-radius:5px
    font-size: 24px
    padding: 4px 10px
    //width: 160px
    height: 57px
    background: rgba(red,0)
    transitions: all 0.2s ease

    .status
      font-size: 32px
      position: relative
      top: -2px
      margin-bottom: -7px

    .status--false
      //color: red

    .top
      text-align: left
      position: relative
      top: -2px

    .sub
      text-align: right
      top:-6px

    .sub, .top
      font-size: 11px
      font-weight: 500
      letter-spacing: 1px
      position:relative
      //top:-6px
"""
