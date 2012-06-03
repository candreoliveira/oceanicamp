json.chart do |json|
  json.renderTo "chart1"
  json.type "column"
end

json.title do |json|
  json.text "Checkpoints por Equipe"
end

json.subtitle do |json|
  json.text "Mostra os checkpoints agrupados pela equipe dos acampantes"
end

json.xAxis do |json|
  json.categories @teams.order_by(:created_at,:asc).distinct(:name)
end

json.yAxis do |json|
  json.min 0
  json.title do |json|
    json.text "Acampantes com Checkpoint"
  end
end

json.legend do |json|
  json.layout 'vertical'
  json.backgroundColor '#FFFFFF'
  json.align 'left'
  json.verticalAlign 'top'
  json.x 100
  json.y 70
  json.floating true
  json.shadow true
end

json.plotOptions do |json|
  json.column do |json|
    json.pointPadding 0.2
    json.borderWidth 0
  end
end

json.series [{
    name: "Teste",
    data: @teams.order_by(:created_at, :asc).collect {|team| {y: 0, color: @colors.shift}},
    color: 'white'
  }]

