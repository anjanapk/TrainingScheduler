const Events = require('../models').Events;
const Users = require('../models').Users;



const getAll = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, events;
  let whereStatement = {};
  if (req.query.name) {
    whereStatement.name = {
      $like: '%' + req.query.name + '%',
    };
  }
  /*
  if (req.query.isCompleted) {
    whereStatement.isCompleted = {
      $eq: req.query.isCompleted === 'true',
    };
*/
    if (req.query.StartTime) {
      whereStatement.StartTime = {
        $eq: req.query.StartTime >= new Date(),
      };
  }
  whereStatement.userId = {
    $eq: req.user.id,
  };
  
 [err, events] = await to(
  
  Events.findAll({ where: whereStatement, order: [['StartTime', 'ASC']] }),
   );
  
  if (err) console.log(err.message);
  return res.json(events);
};
module.exports.getAll = getAll;

const getAllAdmin = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, events;
  if (req.user.userRoleId !== 4) {
    res.statusCode = 401;
    return res.json({ success: false, error: 'Unauthorized' });
  }
  let whereStatement = {};
  let userWhereStatement = {};
  if (req.query.name) {
    whereStatement.name = {
      $like: '%' + req.query.name + '%',
    };
  }

  /*
  if (req.query.isCompleted) {
    whereStatement.isCompleted = {
      $eq: req.query.isCompleted === 'true',
    };
  */

    if (req.query.StartTime) {
      whereStatement.StartTime = {
        $eq: req.query.StartTime >= new Date(),
      };
  
  }

  if (req.query.phone) {
    userWhereStatement.phone = {
      $like: '%' + req.query.phone + '%',
    };
  }

  if (req.query.userId) {
    userWhereStatement.id = {
      $eq: req.query.userId,
    };
  }
  [err, events] = await to(
 
      Events.findAll({
        include: [{ model: Users, where: userWhereStatement }],
      where: whereStatement,
      order: [['StartTime', 'ASC']],
    }),
  );
  if (err) console.log(err.message);
  return res.json(events);
};
module.exports.getAllAdmin = getAllAdmin;

const get = async function (req, res) {
  let err, event;
  let eventId = parseInt(req.params.eventId);
  res.setHeader('Content-Type', 'application/json');

  
  [err, event] = await to(Events.findByPk(eventId));

  
  if (!event) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(event);
};
module.exports.get = get;

const create = async function (req, res) {
  res.setHeader('ContentType', 'application/json');
  const body = req.body;

//  [err, StartTime] = await to(Events.max('StartTime'));
  
  
//  if (err) console.log(err.message);

  body.userId = req.user.id;
  
//  body.orderId = orderId || orderId === 0 ? orderId + 1 : 0;
//  if (!body.name) {
//    return ReE(res, 'Please enter a name', 422);
//  } else {
  
    let err, event;

    [err, event] = await to(Events.create(body));
    if (err) return ReE(res, err, 422);

    return ReS(res, event, 201);
  //}
};
module.exports.create = create;

const update = async function (req, res) {
  let err, event;
  event = req.body;
  [err, event] = await to(

    Events.update(event, {
    
      where: {
        id: event.id,
      },
    }),
  );
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422;
    return res.json({ success: false, error: err });
  }

  return res.json(event);
};
module.exports.update = update;


const markDone = async function (req, res) {
  let err, eventId;

  eventId = req.params.eventId;
  console.log(eventId);
  [err, event] = await to(

    Events.update( 
    
      { isCompleted: true, dateCompleted: new Date() },
      {
        where: {
          id: eventId,
        },
      },
    ),
  );
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422;
    return res.json({ success: false, error: err });
  }

  [err, returnevent] = await to(Events.findByPk(eventId));
  
  return res.json(returnevent);
};
module.exports.markDone = markDone;

const deleted = async function (req, res) {
  let err, event;
  event = req.body;
  [err, event] = await to(

    Events.destroy(event, {
    
      where: {
        id: event.id,
      },
    }),
  );
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422;
    return res.json({ success: false, error: err });
  }

  return res.json(event);
};
module.exports.deleted = deleted;
